INSERT INTO groups (name)
VALUES
    ('Nyckelpigorna'),
    ('Björnarna'),
    ('Lejonen')
ON CONFLICT (name) DO NOTHING;

