
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://LudoForge.github.io/LudoForgeApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/LudoForgeApp"
  },
  {
    "renderMode": 2,
    "route": "/LudoForgeApp/scrivi-un-messaggio"
  },
  {
    "renderMode": 2,
    "route": "/LudoForgeApp/chi-siamo"
  },
  {
    "renderMode": 2,
    "route": "/LudoForgeApp/recensioni"
  },
  {
    "renderMode": 2,
    "route": "/LudoForgeApp/dungeoncrawler"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7574, hash: '43f795e50991947afd92979ddfa4ad1f1f9d21830d7309408e7cad43841c3823', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2241, hash: '8c41859afc59299a58eb6826af1eb6b05f735a27f5bed6a725703c91490da87d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'scrivi-un-messaggio/index.html': {size: 22188, hash: 'd8f4f6aac0374b9d66d170a6909fec5be62e01437c21b29d17b1f067f74321d1', text: () => import('./assets-chunks/scrivi-un-messaggio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25149, hash: 'f7e005c4f77f1fa0e25d3b207b01d005b16165e7360f5d50ce5694b89b48fa97', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'recensioni/index.html': {size: 19426, hash: '2565c52b26ee88f203b274d687e778cbce035d6060d450a15003480e5d0d4c43', text: () => import('./assets-chunks/recensioni_index_html.mjs').then(m => m.default)},
    'chi-siamo/index.html': {size: 20224, hash: '9d34bf418eff528f9c3e3cf1c2d4873d10a62aebeb84f47f5e66e8d6d7f05605', text: () => import('./assets-chunks/chi-siamo_index_html.mjs').then(m => m.default)},
    'dungeoncrawler/index.html': {size: 22323, hash: 'adf6714da5a4910a5a198b6584cab8707e64f2f92657a6de457b07bd914c1f66', text: () => import('./assets-chunks/dungeoncrawler_index_html.mjs').then(m => m.default)},
    'styles-EFPPUCV3.css': {size: 384095, hash: 'zbW8LDYxYXI', text: () => import('./assets-chunks/styles-EFPPUCV3_css.mjs').then(m => m.default)}
  },
};
