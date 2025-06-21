
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ludoforge.github.io/LudoForgeApp/',
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
    'index.csr.html': {size: 7574, hash: '51920cd7fa90a2cb34e7309660bedf1b05c2f792d67a4609910eb47ea37b9782', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2241, hash: '8e3655ffd295394c6ff323ed839dd68d74c10c615287cf0ad75ec10430d62f40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25149, hash: '47a3407d21721c67247bc339bce0cbb101c735e3a0e8033efd0c6257650b5792', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dungeoncrawler/index.html': {size: 22323, hash: '0deb3b2f7cd8dc9ec2ee23a70832548d3131b47f05441dc47618ef3d043f2d90', text: () => import('./assets-chunks/dungeoncrawler_index_html.mjs').then(m => m.default)},
    'scrivi-un-messaggio/index.html': {size: 22188, hash: '0cfadd27bce5128c93884bfd38c38dbea868d9dd15ed849e94a34f5bf185716b', text: () => import('./assets-chunks/scrivi-un-messaggio_index_html.mjs').then(m => m.default)},
    'recensioni/index.html': {size: 19426, hash: 'c885bf59e3ed01f6e3ef4bab9605ecb269123f448cf201e23e69ff050e325937', text: () => import('./assets-chunks/recensioni_index_html.mjs').then(m => m.default)},
    'chi-siamo/index.html': {size: 20224, hash: 'ca8c57f681a35f79fbaf0de4c33d0a43fbbfc40b18356abadb15e992e5e4ac66', text: () => import('./assets-chunks/chi-siamo_index_html.mjs').then(m => m.default)},
    'styles-EFPPUCV3.css': {size: 384095, hash: 'zbW8LDYxYXI', text: () => import('./assets-chunks/styles-EFPPUCV3_css.mjs').then(m => m.default)}
  },
};
