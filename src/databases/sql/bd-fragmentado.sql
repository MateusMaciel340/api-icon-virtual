CREATE DATABASE icone_virtual;

USE icone_virtual;

CREATE TABLE tb_cliente (
    id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100),
    email_cliente VARCHAR(70) UNIQUE,
    senha_cliente VARCHAR(60),
    tipo_cliente INTEGER DEFAULT 1,
    cpf_cliente VARCHAR(15) UNIQUE,
    telefone_cliente VARCHAR(20),
    endereco_cliente VARCHAR(50)
);

CREATE TABLE tb_categoria (
    id_categoria INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo_categoria VARCHAR(50) NOT NULL,
    descricao_categoria LONGTEXT
);

CREATE TABLE tb_produto (
    id_produto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo_produto VARCHAR(45) NOT NULL,
    descricao_produto LONGTEXT,
    preco_produto DOUBLE NOT NULL,
    estoque_produto INTEGER,
    categoria_id INTEGER,
    CONSTRAINT produto_categoria FOREIGN KEY
    (categoria_id) REFERENCES categoria(id_categoria)
);

CREATE TABLE tb_favorito (
    id_favorito INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status_favorito CHAR(1) DEFAULT "n",
    cliente_id INTEGER,
    produto_id INTEGER,
    CONSTRAINT favorito_cliente FOREIGN KEY
    (cliente_id) REFERENCES cliente(id_cliente),
    CONSTRAINT favorito_produto FOREIGN KEY
    (produto_id) REFERENCES produto(id_produto)
);