CREATE TABLE journals (
    id BIGSERIAL PRIMARY KEY,
    child_id BIGINT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    content TEXT NOT NULL DEFAULT '',
    version INT NOT NULL DEFAULT 0,
    CONSTRAINT journals_child_id_date_unique UNIQUE (child_id, date)
);
