export default class Produtos{

    private id:string
    private nome:string
    private marca:string
    private fornecedor:string
    private quantidade:number
   


constructor( nome:string,marca:string, fornecedor:string,quantidade:number, id?:string){
 
    this.id = id === undefined ? undefined : id
    this.nome = nome
    this.marca = marca
    this.fornecedor = fornecedor
    this.quantidade = quantidade
    

}

public getId(){
    return this.id
}

public getNome(){
    return this.nome
}

public getMarca(){
    return this.marca
}

public getFornecedor(){
    return this.fornecedor
}

public getQuantidade(){
    return this.quantidade
}
}