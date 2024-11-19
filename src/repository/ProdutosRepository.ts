import { Client } from "pg";
import UsuarioRepository from "./UsuarioRepository";
import produtos from "src/enty/produtos";
 

export default class ProdutosRepository {
    private connection: Client;

    constructor() {
        
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'projeto_sa',
                user: 'postgres',
                password: 'senai',
            });
        }
    }

    async save(produto: produtos) {
        try {
            await this.connection.connect();

            
            const sql = "INSERT INTO produtos (nome, quantidade, descricao, fornecedor) VALUES ($1, $2, $3, $4)";
            const values = [
                produto.getNome(),    
                produto.getQuantidade(),    
                produto.getDescricao(),  
                produto.getFornecedor(),      
            ];

            
            await this.connection.query(sql, values);

            console.log('Produto inserido com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar o produto:', error);
        } finally {
            await this.connection.end();
        }
    }
}
