
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dungeoncrawlerapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dungeoncrawlerapp"
  },
  {
    "renderMode": 2,
    "route": "/dungeoncrawlerapp/contatti"
  },
  {
    "renderMode": 2,
    "route": "/dungeoncrawlerapp/chi-siamo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6275, hash: '4931ddba0c0d82402d2c20695fd940622a28ec684c7b9186ee3ed2dc05c53ff1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '69590c81e0c49ece1edf513b4e9f18f11829bdfc0f11c986a3d87ba145baa4a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12517, hash: 'c734933447ff2f64137474bbcea6f68762d4a4baff69452f7dd6ba46718461ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contatti/index.html': {size: 14014, hash: 'e0d4eb50e57d92a27981c86a7dcd2ffd95d0a0c50288985c44311e340d26fd45', text: () => import('./assets-chunks/contatti_index_html.mjs').then(m => m.default)},
    'chi-siamo/index.html': {size: 16381, hash: '9ec2c7a35bfe181de35fc667a740262f1e24dd12337501870ec7e5bdc644e5d2', text: () => import('./assets-chunks/chi-siamo_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 383897, hash: 'heJo7LrdeHM', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
