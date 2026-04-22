CREATE TABLE operation_log (
    id BIGSERIAL PRIMARY KEY,
    journal_id BIGINT NOT NULL REFERENCES journals(id) ON DELETE CASCADE,
    revision INT NOT NULL,
    op_type VARCHAR(10) NOT NULL,
    position INT NOT NULL,
    text TEXT,
    length INT,
    user_id BIGINT REFERENCES users(id),
    applied_at TIMESTAMP NOT NULL DEFAULT now()
);
