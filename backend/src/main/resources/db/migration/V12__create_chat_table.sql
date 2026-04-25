CREATE TABLE chat
(
    id BIGSERIAL PRIMARY KEY,
    sender BIGINT NOT NULL,
    recipient BIGINT NOT NULL,
    chatMessage TEXT NOT NULL DEFAULT '',
    timestamp TIMESTAMP NOT NULL
);