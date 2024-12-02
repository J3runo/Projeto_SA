
import './index.css';
import * as echarts from 'echarts'


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


document.getElementById('Estoque').addEventListener("click", async  (event: MouseEvent)=> {
  event.preventDefault();
  
  
  
  (window as any).navigateAPI.irPaginaEstoque()
  
})

document.getElementById('sair').addEventListener("click", async  (event: MouseEvent)=> {
  event.preventDefault();
  
  
  
  (window as any).navigateAPI.irPaginaLogin()
  
})

window.onload = async () => {
  console.log('Página carregada');
  await totalVeiculos();
  await desenhaGrafico();
};

async function totalVeiculos() {
  try {
    // Chama a API para buscar os dados
    const totalVeiculosBanco = await (window as any).buscaAPI.findAllVeiculos();

    // Acesse os dados retornados (presumindo que são enviados como um array com um objeto contendo as contagens)
    const total = totalVeiculosBanco[0]?.total_veiculos;
    const totalAprovado = totalVeiculosBanco[0]?.total_aprovado;
    const totalReprovado = totalVeiculosBanco[0]?.total_reprovado;

    console.log(`Total de veículos: ${total}`);
    console.log(`Aprovados: ${totalAprovado}`);
    console.log(`Reprovados: ${totalReprovado}`);

    // Atualiza a interface com os valores (opcional)
    const elementoTotalVeiculos = document.getElementById('id-total-veiculos');
    if (elementoTotalVeiculos) {
      elementoTotalVeiculos.textContent = `Total de veículos: ${total}`;
    }

    const elementoAprovados = document.getElementById('id-total-aprovados');
    if (elementoAprovados) {
      elementoAprovados.textContent = `Aprovados: ${totalAprovado}`;
    }

    const elementoReprovados = document.getElementById('id-total-reprovados');
    if (elementoReprovados) {
      elementoReprovados.textContent = `Reprovados: ${totalReprovado}`;
    }

    // Passa os dados para a função do gráfico
    return { total, totalAprovado, totalReprovado };

  } catch (error) {
    console.error('Erro ao buscar o total de veículos:', error);
  }
}

async function desenhaGrafico() {
  const dadosBanco = document.getElementById('pizza') as HTMLDivElement;

  // Busca os dados de totalVeiculos para usar no gráfico
  const { total, totalAprovado, totalReprovado } = await totalVeiculos();

  // Inicializa o gráfico
  const chart = echarts.init(dadosBanco);

  // Configura a opção do gráfico com os dados retornados
  const option = {
    title: {
      text: 'Produção',
      subtext: 'Veículos',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Veículos',
        type: 'pie',
        radius: '50%',
        data: [
          { value: totalAprovado, name: 'Aprovados' },
          { value: totalReprovado, name: 'Reprovados' },
          { value: total, name: 'Produzidos' }
          
        ],
      },
    ],
  };

  // Aplica a configuração do gráfico
  chart.setOption(option);
}
