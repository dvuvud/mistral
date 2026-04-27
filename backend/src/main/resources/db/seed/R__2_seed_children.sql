INSERT INTO children (name, group_id)
VALUES 
    -- Grupp: Nyckelpigorna
    ('Alice Svensson',   (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Bob Karlsson',     (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Gustav Larsson',   (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Hanna Olsson',     (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Maja Lundberg',    (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Oskar Pettersson', (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Sofia Bergström',  (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Nils Viklund',     (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Elin Holm',        (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),
    ('Liam Lindkvist',   (SELECT id FROM groups WHERE name = 'Nyckelpigorna')),

    -- Grupp: Björnarna
    ('Clara Lindgren',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('David Eriksson',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Isak Nilsson',     (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Julia Berg',       (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Elias Forsberg',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Alva Dahlberg',    (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Viktor Sjöberg',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Ebba Blomqvist',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Hugo Sandström',   (SELECT id FROM groups WHERE name = 'Björnarna')),
    ('Saga Nyström',     (SELECT id FROM groups WHERE name = 'Björnarna')),

    -- Grupp: Lejonen
    ('Eva Johansson',    (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Felix Andersson',  (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Kevin Holmgren',   (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Linnéa Wallin',    (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Oscar Björk',      (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Tuva Ekström',     (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Arvid Lundgren',   (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Wilma Hellström',  (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Lucas Öberg',      (SELECT id FROM groups WHERE name = 'Lejonen')),
    ('Freja Jakobsson',  (SELECT id FROM groups WHERE name = 'Lejonen'))
ON CONFLICT DO NOTHING;  --- Eftersom namn inte är unika kan den här migrationen köras om och om igen och skapa duplicates

