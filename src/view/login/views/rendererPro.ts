import Veiculos from '../../../enty/veiculos';
import './producao.css';

let listaVeiculos: Veiculos[] = [];

window.onload = async () => {
    console.log('Página carregada');
    await carregarVeiculos();
};

document.getElementById('formulario-cadastro')?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    
    const nome = (document.getElementById('Nome') as HTMLInputElement)?.value;
    const modelo = (document.getElementById('modelo') as HTMLInputElement)?.value;
    const chassi = (document.getElementById('chassi') as HTMLInputElement)?.value;
    const motor = (document.getElementById('motor') as HTMLInputElement)?.value;
    const transmissao = (document.getElementById('transmissao') as HTMLInputElement)?.value;
    const freios = (document.getElementById('freios') as HTMLInputElement)?.value;
    const pneus = (document.getElementById('pneus') as HTMLInputElement)?.value;
    const rodas = (document.getElementById('rodas') as HTMLInputElement)?.value;
    const cor = (document.getElementById('cor') as HTMLInputElement)?.value;

    
    if (!nome || !modelo || !chassi || !motor || !transmissao || !freios || !pneus || !rodas || !cor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    
    const novoVeiculo = new Veiculos(nome, modelo, chassi, motor, transmissao, freios, pneus, rodas, cor);
    listaVeiculos.push(novoVeiculo);

    
    await (window as any).bancoAPI.createVeiculo(novoVeiculo);


    atualizarTabela();
});

document.getElementById('pagina-inicial')?.addEventListener('click', async (event: Event) => {
    event.preventDefault();
    await (window as any).navigateAPI.irPaginaHome();
    console.log('Voltando à página inicial');
});


async function carregarVeiculos() {
    const veiculosBanco = await (window as any).buscaAPI.findAll();

    listaVeiculos = veiculosBanco.map((veiculo: any) =>
        new Veiculos(
            veiculo.nome,
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

    atualizarTabela();
}


function atualizarTabela() {
    const tabela = document.querySelector('table tbody');
    if (tabela) {
        tabela.innerHTML = ''; 

        listaVeiculos.forEach((veiculo) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${veiculo.getNome()}</td>
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
}
