import './estoque.css'

document.getElementById('pagina_inicial').addEventListener('click',async  (event: MouseEvent)=> {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaHome()

})


document.getElementById('salvar').addEventListener('click', async(event: MouseEvent)=>{

const chassi = (document.getElementById('chassi') as HTMLInputElement).value;
const motor = (document.getElementById('motor') as HTMLInputElement).value;
const transmissao = (document.getElementById('transmissao') as HTMLInputElement).value;
const freios = (document.getElementById('freios') as HTMLInputElement).value;
const pneus = (document.getElementById('pneus') as HTMLInputElement).value;
const rodas = (document.getElementById('rodas') as HTMLInputElement).value;
const quatidade = (document.getElementById('quantidade-item') as HTMLInputElement).value

console.log(chassi,quatidade)


})