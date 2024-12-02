import usuarioRepository from "src/repository/UsuarioRepository";
import "./login.css";


document.getElementById("Acessar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const email = (document.getElementById("email_login") as HTMLInputElement).value;
    const password = (document.getElementById("password_login") as HTMLInputElement).value;

    
    const usuario = await (window as any).buscaAPI.findByEmail(email);

    if (!usuario) {
        
        console.log("Usuário não encontrado");
        return;
    }

    
    const valida = await (window as any).buscaAPI.findBySenha({
        senhaEntrada: password, 
        senhaBanco: usuario.senha,
    });

    if (valida) {
        
        (window as any).navigateAPI.irPaginaHome();
        console.log("Usuário autenticado");
    }
    console.log("Credenciais inválidas");
    
    
    
});

document.getElementById('btn-cadastre-se').addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaCadastro()
})