ALTER TABLE attendance DROP COLUMN present;
ALTER TABLE attendance ADD COLUMN status attendance_status NOT NULL DEFAULT 'NOT_SET';
