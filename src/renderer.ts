
import veiculos from './enty/veiculos';
import './index.css';

let listaVeiculos: veiculos[] = [];

document.getElementById("btn")?.addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();
  
  let chassiInput = document.getElementById('chassi') as HTMLInputElement;
  let marcaInput = document.getElementById('marca') as HTMLInputElement;
  let corInput = document.getElementById('cor') as HTMLInputElement;
 
  
  const novoVeiculo = new veiculos(chassiInput.value, marcaInput.value, corInput.value)
  console.log(chassiInput.value,marcaInput.value,corInput.value)

  console.log(chassiInput.value,marcaInput.value,corInput.value)
  listaVeiculos.push(novoVeiculo);
  
  (window as any).bancoAPI.createVeiculo(novoVeiculo)
  console.log(novoVeiculo)
 
  
   chassiInput.value = "";
   marcaInput.value = "";
   corInput.value = "";
  
  
  window.onload = async () => {
    const veiculo = await (window as any).bancoAPI.findAll()
    for (var i = 0; i < veiculo.length; i++) {
      const veicu = new veiculos(veiculo[i].chassi, veiculo[i].marca, veiculo[i].cor)
      listaVeiculos.push(veicu)
    }
    
  }
}
  ) 

  document.getElementById('btn-voltar')?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();
  
    (window as any).navigateAPI.irPaginaLogin()
  
  })



// function render() {

//   var conteudo = document.getElementById("conteudo");
//   conteudo.innerHTML = "";

//   for (var i = 0; i < listaVeiculos.length; i++) {
//     conteudo.innerHTML += `

//          <strong>Chassi: ${listaVeiculos[i].getChassi()}</strong>
//              <span>Marca: ${listaVeiculos[i].getMarca()}</span>
//              <span>Cor: ${listaVeiculos[i].getCor()}</span>
//              <span>id: ${listaVeiculos[i].getId()}</span>
//         </div>
            
//      </div>`

//   }
// }
// function deletarVeiculo(id:string){
//  (window as any).bancoAPI.deletarVeiculo(id)

//   listaVeiculos = listaVeiculos.filter(veiculos => veiculos.getId() !== id)
//   render()
// }

// function irPaginaDetalhes(id:string){
//   (window as any).bancoAPI.irPaginaDetalhes(id)
//   (window as any).bancoAPI.renderDetalhes(id)
  
// }


// (window as any).deletarVeiculo = deletarVeiculo;
// (window as any).irPaginaDetalhes = irPaginaDetalhes;

