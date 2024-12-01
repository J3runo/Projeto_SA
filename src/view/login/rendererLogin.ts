import usuarioRepository from "src/repository/UsuarioRepository";
import "./login.css";


document.getElementById("Acessar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const email = (document.getElementById("email_login") as HTMLInputElement).value;
    const password = (document.getElementById("password_login") as HTMLInputElement).value;

    
    const usuario = await (window as any).buscaAPI.findByEmail(email);

    if (!usuario) {
        alert("Usuário não encontrado!");
        console.log("Usuário não encontrado");
        return;
    }

    
    const valida = await (window as any).buscaAPI.findBySenha({
        senhaEntrada: password, 
        senhaBanco: usuario.senha,
    });

    if (!valida) {
        // alert("Credenciais inválidas! Verifique e tente novamente.");
        console.log("Credenciais inválidas");
        return;
    }

    console.log("Usuário autenticado");
    // alert("Login realizado com sucesso!");
    (window as any).navigateAPI.irPaginaHome();
});

document.getElementById('btn-cadastre-se').addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaCadastro()
})