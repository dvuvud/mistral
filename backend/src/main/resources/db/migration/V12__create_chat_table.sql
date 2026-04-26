CREATE TABLE chat
(
    id BIGSERIAL PRIMARY KEY,
    sender_id BIGINT NOT NULL,
    recipient_id BIGINT NOT NULL,
    chat_message TEXT NOT NULL DEFAULT '',
    timestamp TIMESTAMP NOT NULL
);