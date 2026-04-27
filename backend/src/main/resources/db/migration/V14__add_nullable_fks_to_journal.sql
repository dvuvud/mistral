ALTER TABLE journals ALTER COLUMN child_id DROP NOT NULL;

ALTER TABLE journals
    ADD COLUMN group_id BIGINT REFERENCES groups(id) ON DELETE CASCADE;

ALTER TABLE journals
    ADD CONSTRAINT journals_target_xor
        CHECK (
            (child_id IS NOT NULL AND group_id IS NULL) OR
            (child_id IS NULL AND group_id IS NOT NULL)
        );

ALTER TABLE journals DROP CONSTRAINT journals_child_id_date_unique;

-- one journal per child per day
CREATE UNIQUE INDEX journals_child_date_unique
    ON journals (child_id, date);

-- one journal per group per day
CREATE UNIQUE INDEX journals_group_date_unique
    ON journals (group_id, date);
