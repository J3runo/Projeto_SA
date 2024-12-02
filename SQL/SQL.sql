
/*----Tabela Veiculo-------*/
CREATE TABLE Veiculos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    modelo VARCHAR NOT NULL,
    chassi VARCHAR NOT NULL,
motor VARCHAR NOT NULL,
transmissao VARCHAR NOT NULL,
freios VARCHAR NOT NULL,
pneus VARCHAR NOT NULL,
rodas VARCHAR NOT NULL,
    cor VARCHAR NOT NULL,
inspencao BOOLEAN NOT NULL
);

INSERT INTO Veiculos (nome, modelo, chassi, motor, transmissao, freios, pneus, rodas, cor, inspencao)
VALUES ('jetta', 'hatch', 'aluminio', '2.0', 'cvt', 'Disco', '175/65 R14', 'aco', 'branco', 'false');
INSERT INTO Veiculos (nome, modelo, chassi, motor, transmissao, freios, pneus, rodas, cor, inspencao)
VALUES ('gol', 'hatch', 'aluminio', '1.0', 'automatico', 'Disco', '185/55 R15', 'ferro', 'preto', 'false');
INSERT INTO Veiculos (nome, modelo, chassi, motor, transmissao, freios, pneus, rodas, cor, inspencao)
VALUES ('onix', 'sedan', 'aluminio', '2.0', 'manual', 'tambor', '175/40 R17', 'aco', 'cinza', 'false');

/*----Tabela Produto-------*/
CREATE TABLE Produto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    marca VARCHAR NOT NULL,
    fornecedor VARCHAR NOT NULL,
quantidade NUMERIC NOT NULL
);

INSERT INTO Produto (nome, marca, fornecedor, quantidade)
VALUES ('pneu', 'pirelli', 'rodabrasil', '20');
INSERT INTO Produto (nome, marca, fornecedor, quantidade)
VALUES ('freio', 'braindo', 'fresul', '20');
INSERT INTO Produto (nome, marca, fornecedor, quantidade)
VALUES ('parabrisa', 'parabrinorte', 'paraiba', '5');
INSERT INTO Produto (nome, marca, fornecedor, quantidade)
VALUES ('pneu', 'goodyear', 'rodador', '25');


/*----Tabela Usuario-------*/
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    data_nascimento VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    senha VARCHAR NOT NULL
);

INSERT INTO Usuario(nome, data_nascimento, email, senha)
VALUES ('gustavo','10-02-1970', 'guguzinho@gmail.com', 'gustaboladao');
INSERT INTO Usuario(nome, data_nascimento, email, senha)
VALUES ('bruno','24-06-1988', 'brunonex@gmail.com', 'brunin');