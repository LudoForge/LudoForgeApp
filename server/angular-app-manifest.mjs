
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
    'index.csr.html': {size: 6365, hash: 'e39deeec3069cde454f7cc92411758cbbba9d1468369f5d83ba96cec13e52976', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '86e2fefbc36afe797b536ae76ba5b50c7434926c42aac05355b301d4b5bc7c17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12607, hash: '251fb3146414d3525a49368b2adbe4da30af9d6a6d0538eae853b94a3fa0ccf1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contatti/index.html': {size: 14104, hash: 'c5254e5db0ccfd7f03f6f709cbf61ec5fc382fd0338ff6a655599826945df54f', text: () => import('./assets-chunks/contatti_index_html.mjs').then(m => m.default)},
    'chi-siamo/index.html': {size: 16471, hash: '034a5c4347cd8300312fc97fc1de040061b84b722a8b676074e24136daf11343', text: () => import('./assets-chunks/chi-siamo_index_html.mjs').then(m => m.default)},
    'styles-EFPPUCV3.css': {size: 384095, hash: 'zbW8LDYxYXI', text: () => import('./assets-chunks/styles-EFPPUCV3_css.mjs').then(m => m.default)}
  },
};
