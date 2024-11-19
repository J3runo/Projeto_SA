
export default class Usuario{

        private id:string | undefined; 
        private nome:string
        private cpf:string
        private email:string
        private senha:string


    constructor(nome:string,cpf:string, email:string, senha:string, id?: string ){
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.senha = senha
        

    }

    public getId():string | undefined{
        return this.id
    }

    public getNome(){
        return this.nome
    }

    public getCpf(){
        return this.cpf
    }

    public getEmail(){
        return this.email
    }

    public getSenha(){
        return this.senha
    }


}