
export default class usuarios{

        private id:string | undefined; 
        private nome:string
        private data_nascimento:string
        private email:string
        private senha:string


    constructor(nome:string,data_nascimento:string, email:string, senha:string, id?: string ){
        this.id = id
        this.nome = nome
        this.data_nascimento = data_nascimento
        this.email = email
        this.senha = senha
        

    }

    public getId():string | undefined{
        return this.id
    }

    public getNome(){
        return this.nome
    }

    public getData(){
        return this.data_nascimento
    }

    public getEmail(){
        return this.email
    }

    public getSenha(){
        return this.senha
    }


}