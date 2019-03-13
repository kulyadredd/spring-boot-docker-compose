INSERT IGNORE INTO roles(name) VALUES('ROLE_USER');
INSERT IGNORE INTO roles(name) VALUES('ROLE_ADMIN');
INSERT IGNORE INTO users(email, name, password, username) VALUES ('admin@test.com', 'admin', '$2a$10$C53sEgbCwFJxZHLkuFh2dOEiagYLr3AE7D7mR9LxgO/xFoRjxWZGa', 'Admin');
INSERT IGNORE INTO user_roles(user_id, role_id) SELECT id, 2 FROM users where name='admin';