-- Crear la base de datos
DROP DATABASE IF EXISTS countries_db;
CREATE DATABASE countries_db
  CHARACTER SET utf8
  COLLATE utf8_bin;

USE countries_db;

-- Crear tabla country
CREATE TABLE country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    language VARCHAR(100) NOT NULL,
    area FLOAT NOT NULL,
    population INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Insertar datos de prueba
INSERT INTO country (name, capital, language, area, population) VALUES
('Argentina', 'Buenos Aires', 'Spanish', 2780400, 45000000),
('Germany', 'Berlin', 'German', 357022, 83000000),
('Japan', 'Tokyo', 'Japanese', 377975, 126000000);

-- Procedimiento: Obtener datos de un país por nombre
DELIMITER //
CREATE PROCEDURE country_get(IN country_name VARCHAR(100))
BEGIN
    SELECT * FROM country WHERE name = country_name;
END;
//

-- Procedimiento: Crear un país
CREATE PROCEDURE country_create(
    IN p_name VARCHAR(100),
    IN p_capital VARCHAR(100),
    IN p_language VARCHAR(100),
    IN p_area FLOAT,
    IN p_population INT
)
BEGIN
    INSERT INTO country (name, capital, language, area, population)
    VALUES (p_name, p_capital, p_language, p_area, p_population);
END;
//

-- Procedimiento: Editar un país
CREATE PROCEDURE country_update(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_capital VARCHAR(100),
    IN p_language VARCHAR(100),
    IN p_area FLOAT,
    IN p_population INT
)
BEGIN
    UPDATE country
    SET name = p_name,
        capital = p_capital,
        language = p_language,
        area = p_area,
        population = p_population
    WHERE id = p_id;
END;
//

-- Procedimiento: Eliminar un país
CREATE PROCEDURE country_delete(IN p_id INT)
BEGIN
    DELETE FROM country WHERE id = p_id;
END;
//
DELIMITER ;

-- Fin del script

