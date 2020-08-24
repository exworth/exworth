importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a0f14ee.css",
    "revision": "e6873d30f3ed37056db8142166c4da38"
  },
  {
    "url": "/_nuxt/app.d95a89c.js",
    "revision": "ade094c86f9529267949d9506fd5d5c5"
  },
  {
    "url": "/_nuxt/pages/about.736553e.css",
    "revision": "eb051864fb8b57ff2a25927715c904f1"
  },
  {
    "url": "/_nuxt/pages/about.7969fb8.js",
    "revision": "cb22a585b8163f41c35ccb9c751eceb2"
  },
  {
    "url": "/_nuxt/pages/groupBusiness/custody.9d894f1.css",
    "revision": "94ef489e5f11d13e10943d01df018d14"
  },
  {
    "url": "/_nuxt/pages/groupBusiness/custody.bafda89.js",
    "revision": "ae98eec510c18d8c57a85758ac86e3b7"
  },
  {
    "url": "/_nuxt/pages/index.42e15c7.js",
    "revision": "71da24395b9d61ffe6dae1a600357c73"
  },
  {
    "url": "/_nuxt/pages/index.6a6ac52.css",
    "revision": "508ceb98633548e4fdb7988970cdd794"
  },
  {
    "url": "/_nuxt/pages/joinus/index.5c63d57.js",
    "revision": "73a038f745cd419cc3624a5a18c3feb1"
  },
  {
    "url": "/_nuxt/pages/joinus/index.a6608b2.css",
    "revision": "a342313bb16d1277f855a248b3266519"
  },
  {
    "url": "/_nuxt/pages/web/_lang/about.04d10c6.js",
    "revision": "77255f140655d78ab106a92b3c6cb799"
  },
  {
    "url": "/_nuxt/pages/web/_lang/about.736553e.css",
    "revision": "eb051864fb8b57ff2a25927715c904f1"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/custody.9d894f1.css",
    "revision": "94ef489e5f11d13e10943d01df018d14"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/custody.f6a0b59.js",
    "revision": "01877334693baafaa4976df113daa2f9"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/eco.2ee1df1.js",
    "revision": "7abc7313532e29af47a82fbc97a3bafa"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/eco.ed4a1b3.css",
    "revision": "148948f7082d3d91d2320037966877ef"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/mine.5f18e86.css",
    "revision": "5767672c5a54a0b7e3cae8bdce6ddbb9"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/mine.f3eccad.js",
    "revision": "7d8a6f248d3ba08f9b6a56e65fb1e6fe"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/wallet.43f0977.js",
    "revision": "a44d45a97e97fab979455e2bf67c7c1a"
  },
  {
    "url": "/_nuxt/pages/web/_lang/groupBusiness/wallet.e8f62c8.css",
    "revision": "a26dfbc913443fa9ab8cfeace79ae626"
  },
  {
    "url": "/_nuxt/pages/web/_lang/index.0b2012f.js",
    "revision": "92482fffed950e3dfaf740547e5fd8c1"
  },
  {
    "url": "/_nuxt/pages/web/_lang/index.6a6ac52.css",
    "revision": "508ceb98633548e4fdb7988970cdd794"
  },
  {
    "url": "/_nuxt/pages/web/_lang/joinus/index.a6608b2.css",
    "revision": "a342313bb16d1277f855a248b3266519"
  },
  {
    "url": "/_nuxt/pages/web/_lang/joinus/index.d8d8c33.js",
    "revision": "67f256ecc538579646f02ba4bf8b799e"
  },
  {
    "url": "/_nuxt/runtime.b5d44d7.js",
    "revision": "f9383b76bf2c0195e33abe9c188968ac"
  },
  {
    "url": "/_nuxt/vendors/commons.1266244.js",
    "revision": "e860e458d05cd17ba8a02d6247da6651"
  }
], {
  "cacheId": "EXWORTH",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
