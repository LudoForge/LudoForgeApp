
export default {
  basePath: 'https://LudoForge.github.io/LudoForgeApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
