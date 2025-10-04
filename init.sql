CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(100)
);

INSERT INTO usuarios (nombre, email) VALUES
('Cristian', 'c@ejemplo.com'),
('Agostina', 'a@ejemplo.com'),
('Heber', 'h@ejemplo.com'),
('Lucía', 'l@ejemplo.com'),
('Juan', 'j@ejemplo.com');
