import Produtos from '../../../enty/produtos';
import './estoque.css';

let listaProdutos: Produtos[] = [];


window.onload = async () => {
    console.log('Página carregada');
    await carregarProdutos(); 
};


document.getElementById('pagina_inicial')?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    (window as any).navigateAPI.irPaginaHome();
});


document.getElementById('salvar')?.addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const marca = (document.getElementById('marca') as HTMLInputElement).value;
    const fornecedor = (document.getElementById('fornecedor') as HTMLInputElement).value;
    const quantidade = parseInt((document.getElementById('quantidade-item') as HTMLInputElement).value);

     
    if (!nome || !marca || !fornecedor || isNaN(quantidade) || quantidade < 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }


    const produto = { nome, marca, fornecedor, quantidade };

   await (window as any).bancoAPI.addProdutos(produto);
    console.log("Produto salvo:", produto);


    await carregarProdutos();
});


async function carregarProdutos() {
    const produtosBanco = await (window as any).buscaAPI.findAllProdutos();
    console.log("Produtos carregados do banco:", produtosBanco);

    
    listaProdutos = produtosBanco.map(
        (produto: any) => new Produtos(produto.nome, produto.marca, produto.fornecedor, produto.quantidade)
    );

    
    renderTabela();
}


function renderTabela() {
    const tabelaDiv = document.getElementById('info-banco');
    if (tabelaDiv) {
        tabelaDiv.innerHTML = `
            <table border="1">
                
                <tbody id="tabela-corpo">
                    ${listaProdutos
                        .map(
                            (produto) => `
                        <tr>
                            <td>${produto.getNome()}</td>
                            <td>${produto.getMarca()}</td>
                            <td>${produto.getFornecedor()}</td>
                            <td>${produto.getQuantidade()}</td>
                        </tr>
                    `
                        )
                        .join('')}
                </tbody>
            </table>
        `;
    }
}
