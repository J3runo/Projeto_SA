import { Client, Connection } from "pg";
import veiculos from "src/enty/veiculos";


export default class VeiculosRepository {
    private connection: Client

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'projeto_sa',
                password: 'senai',
                port: 5432,

            })

        }


    }

    async save(veiculo: veiculos) {

        try {
            this.connection.connect()
            const sql = 'INSERT INTO veiculos (chassi, marca, cor) VALUES ($1, $2, $3)'
            const values = [veiculo.getChassi(),veiculo.getMarca(), veiculo.getCor()]

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
            const sql = 'SELECT * FROM veiculo where esta_ativo = $1'
            const result = await this.connection.query(sql,[true])
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
            const sql = 'SELECT * FROM veiculo WHERE id = $1'
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
