CREATE TABLE chat
(

    id BIGSERIAL PRIMARY KEY,
    sender_id BIGINT NOT NULL,
    recipient_id BIGINT NOT NULL,
    chat_message TEXT NOT NULL DEFAULT '',
    timestamp TIMESTAMP NOT NULL
);
CREATE INDEX index_messages_sender_recipient
    ON chat (sender_id, recipient_id);
