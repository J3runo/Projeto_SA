export default class produtos{

    private id:string
    private nome:string
    private quantidade:number
    private descricao:string
    private fornecedor:string
   


constructor( nome:string,quantidade:number,descricao:string, fornecedor:string, id?:string){
 
    this.id = id === undefined ? undefined : id
    this.nome = nome
    this.quantidade = quantidade
    this.descricao = descricao
    this.fornecedor = fornecedor
    

}

public getId(){
    return this.id
}

public getNome(){
    return this.nome
}

public getQuantidade(){
    return this.quantidade
}

public getDescricao(){
    return this.descricao
}

public getFornecedor(){
    return this.fornecedor
}
}