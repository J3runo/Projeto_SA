import './qualidade.css';
import './estoque.css';
import './producao.css';
import Veiculos from '../../../enty/veiculos';
import veiculos from '../../../enty/veiculos';

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
                veiculo.nome,
                veiculo.modelo,
                veiculo.chassi,
                veiculo.motor,
                veiculo.transmissao,
                veiculo.freios,
                veiculo.pneus,
                veiculo.rodas,
                veiculo.cor,
                veiculo.id
            )
        );

        atualizarTabela();
    } catch (error) {
        console.error('Erro ao carregar veículos do banco:', error);
        alert('Erro ao carregar os veículos. Tente novamente mais tarde.');
    }
}

function atualizarTabela() {
    const tabela = document.querySelector('table tbody');
    if (tabela) {
        tabela.innerHTML = ''; 

        listaVeiculos.forEach((veiculo:veiculos) => {
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
                <td><input type="checkbox" class="veiculo-checkbox" id-veiculo="${veiculo.getId()}"></td>
            `;
            tabela.appendChild(novaLinha);
        });
    }
}


document.querySelector('table')?.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.classList.contains('veiculo-checkbox')) {
        const id = target.getAttribute('id-veiculo');
        if (id) {
            console.log(`Checkbox do veículo com ID ${id} foi ${(target.checked ? 'marcado' : 'desmarcado')}`);
           
        }
        }
        
});


document.getElementById('btn-aprovar')?.addEventListener('click', async (event: Event) => {
    event.preventDefault();

    const selectedCheckbox = document.querySelector('input.veiculo-checkbox:checked');
    if (selectedCheckbox) {
        const id = selectedCheckbox.getAttribute('id-veiculo');
        if (id) {
            await updateStatus(id, true); 
        }
    } else {
      
    }
});

// Função para atualizar o status de um veículo
async function updateStatus(id: string, status: boolean) {
    try {
        await (window as any).buscaAPI.updateStatus(id, status);
        // console.log(`Status do veículo com ID ${id} atualizado para ${status}`);
    } catch (error) {
        console.error(`Erro ao atualizar status do veículo com ID ${id}:`, error);
    }
}


















// Função para navegar para a página inicial
document.getElementById('pagina-inicial')?.addEventListener('click', async (event: Event) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaHome();
});
