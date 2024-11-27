

export default class veiculos{

    private id:string
    private nome:string
    private modelo:string
    private chassi:string
    private motor:string
    private transmissao:string
    private freios:string
    private pneus:string
    private rodas:string
    private cor:string
    


constructor(nome:string, modelo:string, chassi:string,motor:string,transmissao:string,freios:string,pneus:string,rodas:string, cor:string, id?: string){

    this.id = id
    this.nome = nome
    this.modelo = modelo
    this.chassi = chassi
    this.motor = motor
    this.transmissao = transmissao
    this.freios = freios
    this.pneus = pneus
    this.rodas = rodas
    this.cor = cor

}

public getId(){
     return this.id
 }

public getNome(){
    return this.nome
}

public getModelo(){
    return this.modelo
}

public getChassi(){
    return this.chassi
}

public getMotor(){
    return this.motor
}

public getTranmissao(){
     return this.transmissao
 }

 public getFreios(){
    return this.freios
}


public getPneus(){
    return this.pneus
}


public getRodas(){
    return this.rodas
}


public getCor(){
    return this.cor
}


}