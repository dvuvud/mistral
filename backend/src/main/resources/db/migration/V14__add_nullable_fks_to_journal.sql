ALTER TABLE journals
    DROP COLUMN child_id;

ALTER TABLE journals
    ADD COLUMN child_id BIGINT REFERENCES children(id) ON DELETE CASCADE,
    ADD COLUMN group_id BIGINT REFERENCES groups(id) ON DELETE CASCADE,
    ADD CONSTRAINT journals_target_xor
        CHECK (
            (child_id IS NOT NULL AND group_id IS NULL) OR
            (child_id IS NULL AND group_id IS NOT NULL)
        );

ALTER TABLE journals DROP CONSTRAINT journals_child_id_date_key;

-- one journal per child per day
CREATE UNIQUE INDEX journals_child_date_unique
    ON journals (child_id, date)
    WHERE child_id IS NOT NULL;

-- one journal per group per day
CREATE UNIQUE INDEX journals_group_date_unique
    ON journals (group_id, date)
    WHERE group_id IS NOT NULL;
