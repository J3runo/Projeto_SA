
import Veiculo from './enty/veiculos';
import './index.css';

let listaVeiculos: Veiculo[] = [];

document.getElementById("btn")?.addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();

  let chassiInput = document.getElementById('chassi') as HTMLInputElement;
  let marcaInput = document.getElementById('marca') as HTMLInputElement;
  let corInput = document.getElementById('cor') as HTMLInputElement;
 
  const novoVeiculo = new Veiculo(chassiInput.value, marcaInput.value, corInput.value)

  listaVeiculos.push(novoVeiculo);
  (window as any).bancoAPI.createVeiculo(novoVeiculo)


  chassiInput.value = "";
  marcaInput.value = "";
  corInput.value = "";
  
  render()

});


window.onload = async () => {
  const veiculo = await (window as any).bancoAPI.findAll()
  for (var i = 0; i < veiculo.length; i++) {
    const veiculos = new Veiculo(veiculo[i].chassi, veiculo[i].marca, veiculo[i].cor)
    listaVeiculos.push(veiculos)
  }
  render()
}

function render() {

  var conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = "";

  for (var i = 0; i < listaVeiculos.length; i++) {
    conteudo.innerHTML += `
     <div class="card">
         <img src="${listaVeiculos[i].getImagem()}" alt="" srcset="">
        <div class="dados">

         <strong>${listaVeiculos[i].getModelo()}</strong>
             <span>cor:${listaVeiculos[i].getCor()}</span>
             <span>ano:${listaVeiculos[i].getAno()}</span>
             <span>preco: R$:${listaVeiculos[i].getPreco()}</span>
        </div>
            <div class="btn-card">
              <button id="btn-ver" onclick = "irPaginaDetalhes('${listaVeiculos[i].getId()}')">Ver </button>
              <button id="btn-deletar" onclick = "deletarVeiculo('${listaVeiculos[i].getId()}')">Deletar</button>
             </div>
     </div>`

  }
}
function deletarVeiculo(id:string){
 (window as any).bancoAPI.deletarVeiculo(id)

  listaVeiculos = listaVeiculos.filter(veiculos => veiculos.getId() !== id)
  render()
}

function irPaginaDetalhes(id:string){
  (window as any).bancoAPI.irPaginaDetalhes(id)
  (window as any).bancoAPI.renderDetalhes(id)
  
}


(window as any).deletarVeiculo = deletarVeiculo;
(window as any).irPaginaDetalhes = irPaginaDetalhes;

