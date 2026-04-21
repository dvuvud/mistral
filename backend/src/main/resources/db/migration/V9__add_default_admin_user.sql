-- Lösenordet är: ADMIN
INSERT INTO users (name, email, password, role, active)
VALUES (
    'admin', 
    'admin@mistral.com', 
    '$2a$12$DzzPwkS7r9YdZG1eQQvEGO3Jrz4b5k5ePHUfMqZeBlEPGWNCCkMCy', -- BCrypt hash för 'ADMIN'
    'ADMIN', 
    true
);
