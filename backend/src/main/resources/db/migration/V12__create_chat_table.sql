CREATE TABLE chat
(
    id BIGSERIAL PRIMARY KEY,
    sender BIGINT NOT NULL,
    recipient BIGINT NOT NULL,
    message TEXT NOT NULL DEFAULT '',
    timestamp TIMESTAMP NOT NULL
);