import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      devContentSecurityPolicy:`img-src * self 'unsafe-inline' blob: data: gap:;`,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
          {
            html:'./src/view/login/login.html',
            js:'./src/view/login/rendererLogin.ts',
            name: 'login',
            preload:{
              js: './src/preload.ts',
            },
          },
          {
            html:'./src/view/login/cadastro.html',
            js:'./src/view/login/rendererCadastro.ts',
            name: 'cadastro',
            preload:{
              js: './src/preload.ts',
            },
          },
          {
            html:'./src/view/login/views/producao.html',
            js:'./src/view/login/views/rendererPro.ts',
            name: 'producao',
            preload:{
              js: './src/preload.ts',
            },
          },
          {
            html:'./src/view/login/views/qualidade.html',
            js:'./src/view/login/views/rendererQua.ts',
            name: 'qualidade',
            preload:{
              js: './src/preload.ts',
            },
          },
          {
            html:'./src/view/login/views/estoque.html',
            js:'./src/view/login/views/rendererEstoque.ts',
            name: 'estoque',
            preload:{
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
