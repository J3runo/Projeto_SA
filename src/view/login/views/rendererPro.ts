import Veiculos from '../../../enty/veiculos';
import './producao.css';

let listaVeiculos: Veiculos[] = [];


document.getElementById('formulario-cadastro')?.addEventListener('submit', async (event: MouseEvent) => {
    event.preventDefault();

    const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
    const chassi = (document.getElementById('chassi') as HTMLInputElement).value;
    const motor = (document.getElementById('motor') as HTMLInputElement).value;
    const transmissao = (document.getElementById('transmissao') as HTMLInputElement).value;
    const freios = (document.getElementById('freios') as HTMLInputElement).value;
    const pneus = (document.getElementById('pneus') as HTMLInputElement).value;
    const rodas = (document.getElementById('rodas') as HTMLInputElement).value;
    const cor = (document.getElementById('cor') as HTMLInputElement).value;

    const novoVeiculo = new Veiculos(modelo, chassi, motor, transmissao, freios, pneus, rodas, cor);
    listaVeiculos.push(novoVeiculo);

    
    await (window as any).bancoAPI.createVeiculo(novoVeiculo);

  
    const tabela = document.querySelector('table tbody');
    if (tabela) {
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
    }
});


document.getElementById('lista-veiculos')?.addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();

    const veiculosBanco = await (window as any).bancoAPI.findAll();
    listaVeiculos = veiculosBanco.map((veiculo: any) => 
        new Veiculos(
            veiculo.modelo,
            veiculo.chassi,
            veiculo.motor,
            veiculo.transmissao,
            veiculo.freios,
            veiculo.pneus,
            veiculo.rodas,
            veiculo.cor
          )
        );
        
          
            const tabela = document.querySelector('table tbody');
            if (tabela) {
                tabela.innerHTML = ''; 
                listaVeiculos.forEach((veiculo) => {
                    
                    const novaLinha = document.createElement('tr');
                    novaLinha.innerHTML = `
                    <td>${veiculo.getModelo()}</td>
                    <td>${veiculo.getChassi()}</td>
                    <td>${veiculo.getMotor()}</td>
                    <td>${veiculo.getTranmissao()}</td>
                    <td>${veiculo.getFreios()}</td>
                    <td>${veiculo.getPneus()}</td>
                    <td>${veiculo.getRodas()}</td>
                    <td>${veiculo.getCor()}</td>
                    `;
                    tabela.appendChild(novaLinha);
                });
            }
        });


document.getElementById('pagina-inicial')?.addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();
    await (window as any).navigateAPI.irPaginaHome();
    console.log('Voltando à página inicial');
});
