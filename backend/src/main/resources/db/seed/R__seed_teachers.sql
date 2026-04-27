INSERT INTO users (name, email, password, role, active)
VALUES                                                                          -- 'password' --
    ('Anna Bergström',   'anna.bergstrom@mistral.com',   '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Björn Lindqvist',  'bjorn.lindqvist@mistral.com',  '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Cecilia Holm',     'cecilia.holm@mistral.com',     '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('David Nyström',    'david.nystrom@mistral.com',    '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Emma Wallin',      'emma.wallin@mistral.com',      '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Fredrik Strand',   'fredrik.strand@mistral.com',   '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Gunilla Ekberg',   'gunilla.ekberg@mistral.com',   '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Henrik Söderberg', 'henrik.soderberg@mistral.com', '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Ingrid Lund',      'ingrid.lund@mistral.com',      '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true),
    ('Jonas Hellberg',   'jonas.hellberg@mistral.com',   '$2a$10$aMySY3K6caX.DBcUSeQKW.6yHCD4qkD/DqQMQS12caWEjOGFCrnra', 'TEACHER', true)
ON CONFLICT (email) DO NOTHING;
