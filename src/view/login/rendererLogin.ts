import usuarioRepository from "src/repository/UsuarioRepository";
import "./login";


document.getElementById("Acessar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const email = (document.getElementById("email_login") as HTMLInputElement).value;
    const password = (document.getElementById("password_login") as HTMLInputElement).value;

    // Buscar o usuário no banco
    const usuario = await (window as any).bancoAPI.findByEmail(email);

    if (!usuario) {
        alert("Usuário não encontrado!");
        console.log("Usuário não encontrado");
        return;
    }

    // Comparar as senhas
    const valida = await (window as any).bancoAPI.findBySenha({
        senhaEntrada: password, // Senha fornecida pelo usuário
        senhaBanco: usuario.senha, // Senha armazenada no banco
    });

    if (!valida) {
        alert("Credenciais inválidas! Verifique e tente novamente.");
        console.log("Credenciais inválidas");
        return;
    }

    console.log("Usuário autenticado");
    alert("Login realizado com sucesso!");
    (window as any).navigateAPI.irPaginaHome();
});

document.getElementById('btn-cadastre-se').addEventListener('click', async (event: MouseEvent) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaCadastro()
})