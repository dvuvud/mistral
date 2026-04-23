CREATE TABLE chat
(
    id BIGSERIAL PRIMARY KEY,
    sender INT NOT NULL,
    recipient INT NOT NULL,
    message TEXT NOT NULL DEFAULT '',
    timestamp TIMESTAMP NOT NULL
);