import './producao.css'

document.getElementById('formulario-cadastro').addEventListener('submit',async  (event: MouseEvent)=> {
    event.preventDefault();
  
    // Obtenha os valores selecionados no formulário
    const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
    const chassi = (document.getElementById('chassi') as HTMLInputElement).value;
    const motor =( document.getElementById('motor') as HTMLInputElement).value;
    const transmissao = (document.getElementById('transmissao') as HTMLInputElement).value;
    const freios = (document.getElementById('freios') as HTMLInputElement).value;
    const pneus = (document.getElementById('pneus') as HTMLInputElement).value;
    const rodas = (document.getElementById('rodas') as HTMLInputElement).value;
    const cor = (document.getElementById('cor') as HTMLInputElement).value;
  
    // Adicione o novo veículo à tabela
    const tabela = document.querySelector('table tbody');
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${modelo}</td>
      <td>${chassi}</td>
      <td>${motor}</td>
      <td>${transmissao}</td>
      <td>${freios}</td>
      <td>${pneus}</td>
      <td>${rodas}</td>
      <td>${cor}</td>
    `;
    tabela.appendChild(novaLinha);
  
  });
  
  document.getElementById('pagina-inicial').addEventListener('click',async  (event: MouseEvent)=> {
    event.preventDefault();
  

    (window as any).navigateAPI.irPaginaHome()
    console.log('voltar pagina inicial')



})