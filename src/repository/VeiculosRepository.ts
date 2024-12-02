import { Client, Connection } from "pg";
import veiculos from "src/enty/veiculos";


export default class VeiculosRepository {
    private connection: Client

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: 'localhost',
                port: 5432,
                database: 'Projeto_SA',
                user: 'postgres',
                password: '425102',

            })

        }

    }


    async save(veiculo: veiculos) {

        try {
            this.connection.connect()
            const sql = 'INSERT INTO veiculos (nome, modelo, chassi, motor, transmissao, freios, pneus, rodas, cor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            const values = [veiculo.getNome(),veiculo.getModelo(), veiculo.getChassi(),veiculo.getMotor(),veiculo.getTranmissao(),veiculo.getFreios(),veiculo.getPneus(),veiculo.getRodas(), veiculo.getCor()]

            await this.connection.query(sql, values)

        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end()
            this.connection = null;
        }

    }

    async updateStatus(id: any) {
        try {
            // Conecta ao banco de dados
            this.connection.connect();
            console.log('conectou')
            // Atualiza o status do veículo com o id fornecido
            const sql = 'UPDATE veiculos SET inspecao = true WHERE id = $1';
            const values = [id];
    
            // Executa a query passando os valores
            await this.connection.query(sql, values);
    
            console.log(`Status do veículo com ID ${id} atualizado para inspecao = true.`);
        } catch (error) {
            console.log('Erro ao atualizar o status:', error);
            
        } finally {
            // Encerra a conexão
            this.connection.end();
            this.connection = null;
        }
    }
    

    
    async findAll() {

        try {
            this.connection.connect()
            const sql = 'SELECT * FROM veiculos '
            const result = await this.connection.query(sql)
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                console.log("Não foi encontrado nenhum valor")
                return []
            }

        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end()
            this.connection = null;
        }
    }
    

    async findAllVeiculos() {

        try {
            this.connection.connect()
            const sql = 'SELECT COUNT(*) AS total_veiculos, COUNT(CASE WHEN inspecao = true THEN 1 END) AS total_aprovado, COUNT(CASE WHEN inspecao IS NULL THEN 1 END) AS total_reprovado FROM veiculos'
            const result = await this.connection.query(sql)
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                console.log("Não foi encontrado nenhum valor")
                return []
            }

        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end()
            this.connection = null;
        }
    }






}