ALTER TABLE children
    ADD COLUMN group_id BIGINT;

ALTER TABLE children
    ADD CONSTRAINT foreign_key_children_group
        FOREIGN KEY (group_id)
            REFERENCES groups(id);

CREATE INDEX idx_child_group_id
    ON children (group_id);
