import { contextBridge, ipcRenderer } from "electron";

import veiculos from './enty/veiculos';
import usuarios from "./enty/usuarios";


contextBridge.exposeInMainWorld('bancoAPI',{
    createVeiculo: async (veiculo:veiculos) => await ipcRenderer.invoke('create', veiculo),
    findAll: async()=> await ipcRenderer.invoke('findAll'),
    findById: async (id:string)=> await ipcRenderer.invoke('findById', id),
    deletarVeiculo: async (id:string) => await ipcRenderer.invoke('deletarVeiculo', id),
    createUsuario: async (usuario: usuarios) => await ipcRenderer.invoke('createUsuario', usuario),
    findByEmail: async (email: string) => await ipcRenderer.invoke('findByEmail', email),
    findBySenha: async(senha:string)=> await ipcRenderer.invoke('findBySenha', senha)
})

contextBridge.exposeInMainWorld('navigateAPI',{
    irPaginaHome:() => ipcRenderer.send('pagina-home'),
    irPaginaCadastro:()=> ipcRenderer.send('paginaCadastro'),
    irPaginaLogin:()=> ipcRenderer.send('paginaLogin'),
    irPaginaProducao:()=> ipcRenderer.send('paginaProducao'),
    irPaginaQualidade:()=> ipcRenderer.send('paginaQualidade'),
    irPaginaEstoque:()=> ipcRenderer.send('paginaEstoque'),





})

