importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1489e8ac4e66ce5cd0ca.css",
    "revision": "65d522f9a821f8972d1ed597384591e4"
  },
  {
    "url": "/_nuxt/149e30acff6886e92551.js",
    "revision": "bddc9f08e4db9f1c8bad159ff36aa0d8"
  },
  {
    "url": "/_nuxt/2ed1810612b7e5f8bbbc.css",
    "revision": "30d27daec683e6d58140a111175d19eb"
  },
  {
    "url": "/_nuxt/3fa695d0008ebb6a6b9e.js",
    "revision": "0260f3b07974b7e04492af78017168df"
  },
  {
    "url": "/_nuxt/4e86b3a2a4f8d2277505.css",
    "revision": "6cd1e588f337f3c9c5c187f78eb7cd31"
  },
  {
    "url": "/_nuxt/63024fa59db737f51829.js",
    "revision": "c6a9050df9def2fae21ac3892b41b256"
  },
  {
    "url": "/_nuxt/6f5d23e0dd9cfa2b45b7.css",
    "revision": "23004e46f9995c147afd156b51fe86d9"
  },
  {
    "url": "/_nuxt/78eb0ad91993cc5a5cdc.js",
    "revision": "7c79ba7e4c0517b7e736a65145d2b20f"
  },
  {
    "url": "/_nuxt/7cf3f16de26855fa9ec1.js",
    "revision": "7d266e4d5379c80e5e7ac10db5d01bba"
  },
  {
    "url": "/_nuxt/8342dcc1f20b00c7b9a4.js",
    "revision": "22a52445b3588a1a9ee0ef7bacb697cb"
  },
  {
    "url": "/_nuxt/995f430b82f78b83c2fb.js",
    "revision": "f228fc14c7208eab572b425d78c92d36"
  },
  {
    "url": "/_nuxt/9bf7d6fb53c0658accbb.js",
    "revision": "86859441fc7453319f2406270cf00e9e"
  },
  {
    "url": "/_nuxt/9f3c25d2fb3c1c511178.js",
    "revision": "be437452625405a361a257931b3f0401"
  },
  {
    "url": "/_nuxt/ac4172c2351321a4c3d6.js",
    "revision": "d91152a0bcdc9edcac0c7ba94150c193"
  },
  {
    "url": "/_nuxt/af55bb3b118bc2dd6aa4.css",
    "revision": "e88d70c0a77793b90e5d61bdf1eaabbd"
  },
  {
    "url": "/_nuxt/b357bc4f533d2675e436.css",
    "revision": "78b1aa0b2b942ab9f2e4204af29271e8"
  },
  {
    "url": "/_nuxt/c161612ef2427465ba45.css",
    "revision": "ccb0f87ba769551565b5bd94870e3e63"
  },
  {
    "url": "/_nuxt/d55700192b36ec5fb4bf.css",
    "revision": "3dd2f786e08253c3f857e71bc5ea9ab6"
  },
  {
    "url": "/_nuxt/dc9984004059d642a3d1.js",
    "revision": "9ddf95345505318d96158273ab41445c"
  },
  {
    "url": "/_nuxt/dd233bed4352c3247973.js",
    "revision": "f446b19ebaab89cd03f2801142977ece"
  },
  {
    "url": "/_nuxt/dd5db22b83f16d4ed26b.js",
    "revision": "be099296ae399d649406ef1e163a1761"
  },
  {
    "url": "/_nuxt/e5fd1fc623238050526c.js",
    "revision": "07962021d3a2130215b2c89c0fdf6631"
  },
  {
    "url": "/_nuxt/fa461efd425536736402.js",
    "revision": "1dd950dc2a86637bdde103573bf85eb9"
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
