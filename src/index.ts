import { app, BrowserWindow, ipcMain } from 'electron';
import UsuarioRepository from './repository/UsuarioRepository';
import Usuario from './enty/usuarios';
import VeiculosRepository from './repository/VeiculosRepository';
import veiculos from './enty/veiculos';




declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;


if (require('electron-squirrel-startup')) {
  app.quit();
}

var mainWindow:BrowserWindow;
const createWindow = (): void => {

   mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL('http://localhost:3000/login');

  mainWindow.webContents.openDevTools();
};


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//---------------------------------------------------------------------------------------//
ipcMain.handle('create',async (event:any, veiculo:any) => {
  const {chassi, marca, cor} = veiculo
  const novoVeiculo = new veiculos(chassi, marca, cor)
  return await new VeiculosRepository().save(novoVeiculo)
})

ipcMain.handle('findAll', async ()=>{
 return await new VeiculosRepository().findAll();
})

ipcMain.handle('findById', async (_:any, id: any)=>{
  return await new VeiculosRepository().findById(id)
})


ipcMain.handle('createUsuario', async (_: any, usuario: any) => {
  const { name, data_nascimento, email, senha} = usuario;

  const newUsuario = new Usuario(name,data_nascimento, email, senha );
  await new UsuarioRepository().save(newUsuario);
})

ipcMain.handle('findByEmail', async (_: any, email: string) => {
  return await new UsuarioRepository().findByEmail(email);
})

ipcMain.handle('findBySenha', async (_:any, senha:any)=>{ 
  const {senhaEntrada, senhaBanco} = senha

  // compara as senhas
  const isMatch = senhaEntrada === senhaBanco;
  return isMatch; // Retorna true se forem iguais
});


ipcMain.on('pagina-home', ()=>{
  mainWindow.loadURL('http://localhost:3000/main_window')
})

ipcMain.on('paginaCadastro', ()=>{
  mainWindow.loadURL('http://localhost:3000/cadastro')
})

ipcMain.on('paginaLogin', ()=>{
  mainWindow.loadURL('http://localhost:3000/login')
})

ipcMain.on('paginaProducao', ()=>{
  mainWindow.loadURL('http://localhost:3000/producao')
})

// ipcMain.on('paginaQualidade', ()=>{
//   mainWindow.loadURL('http://localhost:3000/login')
// })

// ipcMain.on('paginaEstoque', ()=>{
//   mainWindow.loadURL('http://localhost:3000/login')
// })
