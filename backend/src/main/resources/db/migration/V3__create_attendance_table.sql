CREATE TABLE attendance (
    id BIGSERIAL PRIMARY KEY,
    child_id BIGINT NOT NULL,
    date DATE NOT NULL,
    present BOOLEAN NOT NULL,

    CONSTRAINT check_child_existence
        FOREIGN KEY (child_id)
            REFERENCES children(id),

    CONSTRAINT unique_child_date UNIQUE (child_id, date)
);