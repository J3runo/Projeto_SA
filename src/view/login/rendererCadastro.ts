import "./cadastro.css"

document.getElementById("cadastrar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const nome = document.getElementById("nome") as HTMLInputElement;
    const dataNascimento = document.getElementById("Data_nascimento") as HTMLInputElement;
    const email = document.getElementById("email_cadastro") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const passwordConfirmation = document.getElementById("password_confimation") as HTMLInputElement;

    // Verifica se as senhas coincidem
    if (password.value !== passwordConfirmation.value) {
        alert("As senhas não coincidem! Tente novamente.");
        return;
    }

    console.log(nome.value, dataNascimento.value, email.value, password.value, passwordConfirmation.value);

    // Verifica se o usuário já existe
    const usuarioExiste = await (window as any).buscaAPI.findByEmail(email.value);
    if (usuarioExiste?.id) {
        alert("Usuário já existe! Tente outro e-mail.");
        console.log("USUÁRIO JÁ EXISTE!!!");
        return;
    }

    // Cria o novo usuário
    const usuario = {
        name: nome.value,
        data_nascimento: new Date(dataNascimento.value),
        email: email.value,
        senha: password.value,
    };
    await (window as any).buscaAPI.createUsuario(usuario);

    // Exibe um alerta de sucesso
    alert("Usuário cadastrado com sucesso!");
    (window as any).navigateAPI.irPaginaLogin()
});

document.getElementById("btn-voltar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    (window as any).navigateAPI.irPaginaLogin()
})