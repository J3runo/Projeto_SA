

import './index.css';

document.getElementById('botao-voltar').addEventListener('click',()=>{
  (window as any).bancoAPI.irPaginaHome()
  console.log('voltou')
})

window.onload = async () =>{
    const id = new URLSearchParams(window.location.search).get('id');
    const veiculo = await (window as any).bancoAPI.findById(id)
    console.log(veiculo)


    var conteudo = document.getElementById("veiculo");
    conteudo.innerHTML = "";
  
   
      conteudo.innerHTML += `
       <div class="card">
           <img src="${veiculo.imagem}" alt="img" srcset="">
          <div class="dados">
  
           <strong>Modelo:${veiculo.modelo}</strong>
               <span>cor:${veiculo.cor}</span>
               <span>ano:${veiculo.ano}</span>
               <span>preco: R$:${veiculo.preco}</span>
            </div>
       </div>`
  
    
    }