import './producao.css'


// document.getElementById('form-cadastro').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const modelo = (document.getElementById('modelo')as HTMLInputElement).value;
//     const chassi = (document.getElementById('chassi')as HTMLInputElement).value;
//     const motor = (document.getElementById('motor')as HTMLInputElement).value;
//     const transmissao = (document.getElementById('transmissao')as HTMLInputElement).value;
//     const freios = (document.getElementById('freios')as HTMLInputElement).value;
//     const pneus = (document.getElementById('pneus')as HTMLInputElement).value;
//     const rodas = (document.getElementById('rodas')as HTMLInputElement).value;
//     const cor = (document.getElementById('cor')as HTMLInputElement).value;
  
//     // Adicionar veículo à tabela de listagem
//     const tabela = document.querySelector('table tbody');
//     const novaLinha = document.createElement('tr');
//     novaLinha.innerHTML = `
//       <td>${modelo}</td>
//       <td>${chassi}</td>
//       <td>${cor}</td>
//       <td><a href="vehicle-detail.html?id=${chassi}">Ver Detalhes</a></td>
//     `;
//     tabela.appendChild(novaLinha);
  
//     // Armazenar veículo no localStorage para persistência
//     const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
//     veiculos.push({ modelo, chassi, motor, transmissao, freios, pneus, rodas, cor });
//     localStorage.setItem('veiculos', JSON.stringify(veiculos));
  
    
//   });
  