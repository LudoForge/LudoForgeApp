
export default {
  basePath: 'https://ludoforge.github.io/LudoForgeApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
