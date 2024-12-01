import { Client } from "pg";

import produtos from "../enty/produtos";
import Produtos from "../enty/produtos";
 

export default class ProdutosRepository {
    private connection: Client;

    constructor() {
        
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'Projeto_SA',
                user: 'postgres',
                password: '425102',
            });
        }
    }

    async save(produto: Produtos) {
        
        try {
            await this.connection.connect();

            
            const sql = "INSERT INTO produtos (nome, marca, fornecedor, quantidade) VALUES ($1, $2, $3, $4)";
            const values = [
                produto.getNome(),    
                produto.getMarca(),  
                produto.getFornecedor(),      
                produto.getQuantidade(),   
            ];
            
            
            await this.connection.query(sql, values);

            console.log('Produto inserido com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar o produto:', error);
        } finally {
            await this.connection.end();
        }
    }
    async findAllProdutos() {
    
        try {
            this.connection.connect()
            const sql = 'SELECT * FROM produtos '
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
