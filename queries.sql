CREATE DATABASE db_web

CREATE TABLE produtos(
	id SERIAL PRIMARY KEY,
	created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	nome VARCHAR(255),
	marca VARCHAR(255),
	preco REAL
)

SET TIMEZONE TO 'America/Sao_Paulo';

INSERT INTO produtos (nome,marca,preco) VALUES 
('Teclado','LogiTech',100),
('Smartphone MOTO G20', 'Motorola', 990)