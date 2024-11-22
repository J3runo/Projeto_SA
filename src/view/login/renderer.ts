
import usuarioRepository from "src/repository/UsuarioRepository";
import "./login.css"


document.getElementById("cadastrar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement;
    var dataNascimento = document.getElementById("Data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email_cadastro") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confimation") as HTMLInputElement;

    if(password.value !== passwordConfirmation.value){
        return;
    }
    console.log(nome.value,dataNascimento.value,email.value,password.value,passwordConfirmation.value)
    
    const usuarioExiste = await (window as any).bancoAPI.findByEmail(email.value);
    if(usuarioExiste?.id){
    console.log('USUARIO JA EXISTE!!!')
    return;
    }
    
    var usuario = {
        name:nome.value,
        data_nascimento:new Date(dataNascimento.value) ,
        email:email.value,
        senha: password.value
    };
   await (window as any).bancoAPI.createUsuario(usuario);
    
})

document.getElementById('Acessar').addEventListener('click', async (event:MouseEvent)=>{
    event.preventDefault();
    
    var email = document.getElementById('email_login')as HTMLInputElement;
    var password = document.getElementById('password_login')as HTMLInputElement;

    const usuario = await(window as any).bancoAPI.findByEmail(email.value)
    if(!usuario){
        console.log('USUARIO NAO EXISTE!!!')
        return
    }

    const passwordConfirmation ={
        password: password.value
    }

     const validPassword = await (window as any)(passwordConfirmation)
    if(!validPassword){
        console.log('CREDENCIAIS INCORRETAS...')
        return;
    }

    (window as any).navigateAPI.irPaginaHome()

})