ALTER TABLE attendance ALTER COLUMN status TYPE varchar(50) USING status::text;
ALTER TABLE attendance ALTER COLUMN status SET DEFAULT 'NOT_SET';
