DROP DATABASE IF EXISTS artcurator;
CREATE DATABASE artcurator;
USE artcurator;
SHOW TABLES;
--
DESC user;
DESC address;
DESC product;
DESC cart;
DESC wallet;
DESC orders;
--
SELECT * FROM  user;
SELECT * FROM  address;
SELECT * FROM  product;
SELECT * FROM  cart;
SELECT * FROM  wallet;
SELECT * FROM  orders;



CREATE TABLE Users (
	u_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    u_name VARCHAR(255) NOT NULL,
    u_email VARCHAR(50) NOT NULL UNIQUE,
    u_password VARCHAR(50) NOT NULL,
    u_phone VARCHAR(11) NOT NULL,
    u_dob DATE NOT NULL,
    u_role VARCHAR(10)
);

CREATE TABLE Address (
	appartment VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    pin VARCHAR(25) NOT NULL,
    u_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (u_id)
		REFERENCES Users (u_id)
		ON DELETE CASCADE
);

CREATE TABLE Product (
	p_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    p_name VARCHAR(255) NOT NULL,
    p_category VARCHAR(50),
    p_price DECIMAL(10, 2) NOT NULL,
    p_description TEXT NOT NULL,
    p_image BLOB NOT NULL,
    p_image_type VARCHAR(50) NOT NULL,
    p_status VARCHAR(10) NOT NULL,
    seller_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (seller_id)
		REFERENCES Users (u_id)
        ON DELETE CASCADE
);

CREATE TABLE Cart (
	c_id INT UNSIGNED NOT NULL,
	p_id INT UNSIGNED NOT NULL,
    u_id INT UNSIGNED NOT NULL,
    p_price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (p_id),
    FOREIGN KEY (p_id)
		REFERENCES Product (p_id)
        ON DELETE CASCADE,
    FOREIGN KEY (u_id)
		REFERENCES Users (u_id)
        ON DELETE CASCADE
);

CREATE TABLE Orders (
	o_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	p_id INT UNSIGNED NOT NULL,
    u_id INT UNSIGNED NOT NULL,
	o_timestamp DATETIME NOT NULL,
    FOREIGN KEY (p_id)
		REFERENCES Product (p_id)
        ON DELETE CASCADE,
    FOREIGN KEY (u_id)
		REFERENCES Users (u_id)
        ON DELETE CASCADE
);

CREATE TABLE Wallet (
	w_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    u_id INT UNSIGNED NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (u_id)
		REFERENCES Users (u_id)
        ON DELETE CASCADE
);

drop table Users;
drop table Address;
drop table Product;
drop table Cart;
drop table Orders;
drop table Wallet;
