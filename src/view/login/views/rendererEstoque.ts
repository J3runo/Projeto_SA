import './estoque.css'

document.getElementById('pagina_inicial').addEventListener('click',async  (event: MouseEvent)=> {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaHome()

})
