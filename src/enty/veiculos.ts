

export default class veiculos{

    private id:string
    private chassi:string
    private marca:string
    private cor:string
    


constructor(chassi:string,marca:string,cor:string){

   
    this.chassi = chassi
    this.marca = marca
    this.cor = cor

}

public getId(){
     return this.id
 }
 public getChassi(){
    return this.chassi
 }
public getMarca(){
     return this.marca
 }

 public getCor(){
    return this.cor
}

}