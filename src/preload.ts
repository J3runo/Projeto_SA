import { contextBridge, ipcRenderer } from "electron";

import veiculos from './enty/veiculos';


contextBridge.exposeInMainWorld('bancoAPI',{
    createVeiculo: async (veiculo:veiculos) => await ipcRenderer.invoke('create', veiculo),
    findAll: async()=> await ipcRenderer.invoke('findAll'),
    findById: async (id:string)=> await ipcRenderer.invoke('findById', id),
    deletarVeiculo: async (id:string) => await ipcRenderer.invoke('deletarVeiculo', id),
    createUsuario: async (usuario: any) => await ipcRenderer.invoke('createUsuario', usuario),
    findByEmail: async (email: string) => await ipcRenderer.invoke('findByEmail', email)
    
})

contextBridge.exposeInMainWorld('navigateAPI',{
    irPaginaDetalhes:(id:string) => ipcRenderer.send('change-screen',id),
    irPaginaHome:() => ipcRenderer.send('change-screen-home'),
})


contextBridge.exposeInMainWorld('authAPI',{
    hash: async (credentials:any) => await ipcRenderer.send('hash_password', credentials)
})