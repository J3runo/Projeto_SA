import { Client } from "pg";
import usuarios from "src/enty/usuarios";

export default class UsuarioRepository {
    private connection: Client

    constructor() {
        if(!this.connection){
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'projeto_sa',
                user: 'postgres',
                password: 'senai'
            });
        }
    }

    async save(usuarios: usuarios){
        try {
            
            this.connection.connect()
            const sql = 'INSERT INTO usuarios (nome, data_nascimento, email, senha ) VALUES ($1, $2, $3, $4)';
            const values = [
                
                usuarios.getNome(),
                usuarios.getData(),
                usuarios.getEmail(),
                usuarios.getSenha(),
               
            ];
    console.log(usuarios.getSenha)

            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findByEmail(email: string){
        try {
            this.connection.connect();
            const sql = "SELECT * FROM usuarios WHERE email = $1";
            const result = await this.connection.query(sql, [email]);
            return result.rows[0];
        } catch (error) {
            console.log(error)
            return []
        }finally {
            this.connection.end();
            this.connection = null;
        }
    }
}