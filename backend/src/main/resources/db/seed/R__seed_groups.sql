INSERT INTO groups (name)
VALUES
    ('Nyckelpigorna'),
    ('Björarna'),
    ('Lejonen')
ON CONFLICT (name) DO NOTHING;

