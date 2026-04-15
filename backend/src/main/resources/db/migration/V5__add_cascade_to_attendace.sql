ALTER TABLE attendance
DROP CONSTRAINT check_child_existence;

ALTER TABLE attendance
ADD CONSTRAINT check_child_existence
FOREIGN KEY (child_id)
REFERENCES children(id)
ON DELETE CASCADE;
