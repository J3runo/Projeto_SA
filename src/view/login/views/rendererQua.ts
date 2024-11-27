
import './qualidade.css'
import veiculos from '../../../enty/veiculos';

document.getElementById('pagina_inicial').addEventListener('click', async (event: MouseEvent)=> {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaHome()


})




// window.onload =  async () => {
    
//     const veiculosBanco = await (window as any).bancoAPI.findAll();
//     const listaVeiculos = veiculosBanco.map((veiculo: any) => 
//         new veiculos(
//             veiculo.nome,
//             veiculo.modelo,
//             veiculo.chassi,
//             veiculo.motor,
//             veiculo.transmissao,
//             veiculo.freios,
//             veiculo.pneus,
//             veiculo.rodas,
//             veiculo.cor
//           )
//         );
        
          
//             const lista = document.querySelector('pagina-inicial');
//             if (lista) {
//                 lista.innerHTML = ''; 
//                 listaVeiculos.forEach((veiculo: any) => {
                    
//                     const novaLinha = document.createElement('tr');
//                     novaLinha.innerHTML = `
                   
//                     <li>${veiculo.getNome()}</li>
//                     `;
//                     lista.appendChild(novaLinha);
//                 });
//             }
//         }
