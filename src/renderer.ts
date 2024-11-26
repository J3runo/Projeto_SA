
import veiculos from './enty/veiculos';
import './index.css';
import * as echarts from 'echarts'




let listaVeiculos: veiculos[] = [];

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

  
  const novoVeiculo = new veiculos(modelo,chassi,motor,transmissao,freios,pneus,rodas,cor)
  console.log(modelo,chassi,motor,transmissao,freios,pneus,rodas,cor)

  
  listaVeiculos.push(novoVeiculo);
  
  (window as any).bancoAPI.createVeiculo(novoVeiculo)
  console.log(novoVeiculo)

  
  
  window.onload = async () => {
    const veiculo = await (window as any).bancoAPI.findAll()
    for (var i = 0; i < veiculo.length; i++) {
      const veicu = new veiculos(veiculo[i].modelo, veiculo[i].chassi, veiculo[i].motor,veiculo[i].transmissao,veiculo[i].freios,veiculo[i].pneus,veiculo[i].rodas,veiculo[i].cor)
      listaVeiculos.push(veicu)
    }
    
  }
}
  ) 

  desenhaGrafico()




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















function desenhaGrafico(){

  const teste = document.getElementById('pizza') as HTMLDivElement;

const chart = echarts.init(teste)


const option = {
    title: {
      text: 'Produção',
      subtext: 'Veiculos',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Aprovados' },
          { value: 735, name: 'reprovados' },
          { value: 580, name: 'Produzidos' },
          { value: 484, name: 'Avaliados' },
          
        ]
      }]
  };
  chart.setOption(option)
}