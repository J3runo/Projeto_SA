import './qualidade.css';
import './estoque.css';

import Veiculos from '../../../enty/veiculos';


let listaVeiculos: Veiculos[] = [];

window.onload = async () => {
    console.log('Página carregada');
    await carregarBanco();
};


async function carregarBanco() {
    try {
        const veiculosBanco = await (window as any).buscaAPI.findAll();

        listaVeiculos = veiculosBanco.map((veiculo: any) =>
            new Veiculos(
                veiculo.id,
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
    } catch (error) {
        console.error('Erro ao carregar veículos do banco:', error);
        alert('Erro ao carregar os veículos. Tente novamente mais tarde.');
    }
}

/// Função para atualizar a tabela de veículos
function atualizarTabela() {
    const tabela = document.querySelector('table tbody');
    if (tabela) {
        tabela.innerHTML = ''; 

        listaVeiculos.forEach((veiculo) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
            <td>${veiculo.getId()}</td>
            <td>${veiculo.getNome()}</td>
            <td>${veiculo.getModelo()}</td>
            <td>${veiculo.getChassi()}</td>
            <td>${veiculo.getMotor()}</td>
            <td>${veiculo.getTranmissao()}</td>
            <td>${veiculo.getFreios()}</td>
            <td>${veiculo.getPneus()}</td>
            <td>${veiculo.getRodas()}</td>
            <td>${veiculo.getCor()}</td>
            <td><input type="checkbox" class="veiculo-checkbox" data-id="${veiculo.getId()}"></td>
            
            `;
            id = veiculo.getId()
            tabela.appendChild(novaLinha);
        });
    }
}
let id
document.querySelector('table')?.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    
    if (target.classList.contains('veiculo-checkbox')) {
        id = target.getAttribute('data-id');
        if (id) {
            console.log(`Checkbox do veículo com ID ${id} foi ${(target.checked ? 'marcado' : 'desmarcado')}`);
        }
        console.log(id)
    }
});















































// Ir para a pagina Inicial ---------------------------------------------------------------------
document.getElementById('pagina-inicial')?.addEventListener('click', async (event: Event) => {
    event.preventDefault();
    
    (window as any).navigateAPI.irPaginaHome();
    
    
});
//------------------------------------------------------------------------------------------------
