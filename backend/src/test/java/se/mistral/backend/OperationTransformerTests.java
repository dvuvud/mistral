package se.mistral.backend;

import static org.assertj.core.api.Assertions.assertThat;
import static se.mistral.backend.journal.ot.Operation.Type.DELETE;
import static se.mistral.backend.journal.ot.Operation.Type.INSERT;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import se.mistral.backend.journal.ot.Operation;
import se.mistral.backend.journal.ot.OperationTransformer;

class OperationTransformerTests {

    private final OperationTransformer transformer = new OperationTransformer();

    private Operation insert(final int pos, final String text) {
        return Operation.builder().type(INSERT).position(pos).text(text).build();
    }

    private Operation delete(final int pos, final int length) {
        return Operation.builder().type(DELETE).position(pos).length(length).build();
    }

    @Nested
    class InsertVsInsert {

        @Test
        void concurrentBeforeIncoming() {
            final Operation incoming = insert(3, "X");
            final Operation concurrent = insert(1, "AB");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(5);
            assertThat(result.getText()).isEqualTo("X");
        }

        @Test
        void concurrentAtSamePosition() {
            final Operation incoming = insert(3, "X");
            final Operation concurrent = insert(3, "AB");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(5);
        }

        @Test
        void concurrentAfterIncoming() {
            final Operation incoming = insert(2, "X");
            final Operation concurrent = insert(5, "AB");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
        }
    }

    @Nested
    class InsertVsDelete {

        @Test
        void concurrentDeleteBeforeIncoming() {
            final Operation incoming = insert(7, "X");
            final Operation concurrent = delete(1, 2);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(5);
        }

        @Test
        void concurrentDeleteOverlappingIncoming() {
            final Operation incoming = insert(4, "X");
            final Operation concurrent = delete(2, 4);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
        }

        @Test
        void concurrentDeleteAfterIncoming() {
            final Operation incoming = insert(2, "X");
            final Operation concurrent = delete(5, 3);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
        }
    }

    @Nested
    class DeleteVsInsert {

        @Test
        void concurrentInsertBeforeDelete() {
            final Operation incoming = delete(3, 2);
            final Operation concurrent = insert(1, "AB");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(5);
            assertThat(result.getLength()).isEqualTo(2);
        }

        @Test
        void concurrentInsertInsideDeleteRange() {
            final Operation incoming = delete(2, 5);
            final Operation concurrent = insert(4, "XX");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
            assertThat(result.getLength()).isEqualTo(7);
        }

        @Test
        void concurrentInsertAfterDeleteRange() {
            final Operation incoming = delete(1, 3);
            final Operation concurrent = insert(8, "XX");

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(1);
            assertThat(result.getLength()).isEqualTo(3);
        }
    }

    @Nested
    class DeleteVsDelete {

        @Test
        void concurrentDeleteBeforeIncoming() {
            final Operation incoming = delete(7, 3);
            final Operation concurrent = delete(2, 2);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(5);
            assertThat(result.getLength()).isEqualTo(3);
        }

        @Test
        void concurrentDeleteAfterIncoming() {
            final Operation incoming = delete(1, 3);
            final Operation concurrent = delete(6, 2);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(1);
            assertThat(result.getLength()).isEqualTo(3);
        }

        @Test
        void concurrentDeleteOverlapsFromLeft() {
            final Operation incoming = delete(4, 4);
            final Operation concurrent = delete(2, 4);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
            assertThat(result.getLength()).isEqualTo(2);
        }

        @Test
        void concurrentDeleteOverlapsFromRight() {
            final Operation incoming = delete(2, 5);
            final Operation concurrent = delete(5, 4);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(2);
            assertThat(result.getLength()).isEqualTo(3);
        }

        @Test
        void concurrentDeleteFullyContainsIncoming() {
            final Operation incoming = delete(3, 2);
            final Operation concurrent = delete(1, 8);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getLength()).isEqualTo(0);
        }

        @Test
        void incomingDeleteFullyContainsConcurrent() {
            final Operation incoming = delete(1, 8);
            final Operation concurrent = delete(3, 2);

            final Operation result = transformer.transform(incoming, concurrent);

            assertThat(result.getPosition()).isEqualTo(1);
            assertThat(result.getLength()).isEqualTo(6);
        }
    }

    @Nested
    class Convergence {

        @Test
        void twoConcurrentInserts() {
            final String base = "hello";
            final Operation opA = insert(2, "X");
            final Operation opB = insert(4, "Y");

            final String afterA = applyOp(base, opA);
            final Operation opB2 = transformer.transform(opB, opA);
            final String afterAB = applyOp(afterA, opB2);

            final String afterB = applyOp(base, opB);
            final Operation opA2 = transformer.transform(opA, opB);
            final String afterBA = applyOp(afterB, opA2);

            assertThat(afterAB).isEqualTo(afterBA);
        }

        @Test
        void insertAndDeleteConverge() {
            final String base = "hello world";
            final Operation opA = insert(5, "!");
            final Operation opB = delete(6, 5);

            final String afterA = applyOp(base, opA);
            final Operation opB2 = transformer.transform(opB, opA);
            final String afterAB = applyOp(afterA, opB2);

            final String afterB = applyOp(base, opB);
            final Operation opA2 = transformer.transform(opA, opB);
            final String afterBA = applyOp(afterB, opA2);

            assertThat(afterAB).isEqualTo(afterBA);
        }

        private String applyOp(final String content, final Operation op) {
            final int pos = Math.max(0, Math.min(op.getPosition(), content.length()));
            if (op.getType() == INSERT) {
                return content.substring(0, pos) + op.getText() + content.substring(pos);
            } else {
                final int end = Math.min(pos + op.getLength(), content.length());
                return content.substring(0, pos) + content.substring(end);
            }
        }
    }
}
