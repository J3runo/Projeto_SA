
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

  document.getElementById('Producao')?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();
  
    (window as any).navigateAPI.irPaginaProducao()
  
  })

  document.getElementById('Qualidade')?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaQualidade()
  
  })

