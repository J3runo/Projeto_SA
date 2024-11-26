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
            const sql = 'INSERT INTO veiculos (modelo, chassi, motor, transmissao, freios, pneus, rodas, cor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
            const values = [veiculo.getModelo(), veiculo.getChassi(),veiculo.getMotor(),veiculo.getTranmissao(),veiculo.getFreios(),veiculo.getPneus(),veiculo.getRodas(), veiculo.getCor()]

            await this.connection.query(sql, values)

        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end()
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

    async findById(id: string) {

        try {
            this.connection.connect()
            const sql = 'SELECT * FROM veiculos WHERE id = $1'
            const resultId = await this.connection.query(sql,[id])
            return resultId.rows;
        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end()
            this.connection = null;
        }
        }



}
