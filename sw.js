importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0493150d2c698057c9ea.js",
    "revision": "3951ef1a2289b6af076f700440c4ea35"
  },
  {
    "url": "/_nuxt/06b97b9767ef7061e01e.js",
    "revision": "d4cbca56e9cfcdadeae4bf296f6969c3"
  },
  {
    "url": "/_nuxt/0eecb67ee797e882ce2d.js",
    "revision": "5f0e4be0beb07dca4d42d168249fb757"
  },
  {
    "url": "/_nuxt/3bcd7c348e97404fe690.js",
    "revision": "1f4cf251660d429894ead39357445497"
  },
  {
    "url": "/_nuxt/46e3eb9cf8b39c3a2751.css",
    "revision": "a970e91420a296e83471f61c137b0c74"
  },
  {
    "url": "/_nuxt/4f883af86d84555b8223.css",
    "revision": "6941dc7afd9ebd1be8f525b325c0c482"
  },
  {
    "url": "/_nuxt/59897e95e148ea62280d.css",
    "revision": "a7d43adfe167a1cfa2ca307df2de7048"
  },
  {
    "url": "/_nuxt/5a18aadb549b5ad296f0.js",
    "revision": "4e929512b7900841143eb7aa8b6cdac7"
  },
  {
    "url": "/_nuxt/6a89fdd48123a91a948b.js",
    "revision": "99dc97c92312c00bc0ce07d60d2a9c65"
  },
  {
    "url": "/_nuxt/72d9a19abdc556715da3.js",
    "revision": "34b393755b31ad8f01bbf68f59806067"
  },
  {
    "url": "/_nuxt/7a901f23773f0412ffc1.js",
    "revision": "16983c57fc4dcd101a8d3bfe08708bc3"
  },
  {
    "url": "/_nuxt/8b88e0213adfce6e6cfb.js",
    "revision": "bb47aff0a13cc10c306cee747069c989"
  },
  {
    "url": "/_nuxt/947f7da254da1c44e372.css",
    "revision": "88a725d08163f9f6da15aa99a7bfaec9"
  },
  {
    "url": "/_nuxt/95b448af47642c90f248.css",
    "revision": "aae2e7ccabaecf2705ef624159e494db"
  },
  {
    "url": "/_nuxt/a5840ace7ad4e17a56a2.css",
    "revision": "669dc85abe8c524f2ff2a007238ebc1e"
  },
  {
    "url": "/_nuxt/aa94703ffcd1ba16a4e2.js",
    "revision": "30b4fc9235a1738991b36d64390a3876"
  },
  {
    "url": "/_nuxt/af1be31a5dcd19a55353.js",
    "revision": "6f4a60c7a1dd27653f951e1507606957"
  },
  {
    "url": "/_nuxt/bb58a3681cf66c01012f.js",
    "revision": "0dc9d802c24479bd4bb0424ebdb28c26"
  },
  {
    "url": "/_nuxt/bb65575240b1ac0431f8.css",
    "revision": "69d8c2eb6c407b0b061e464e5438651f"
  },
  {
    "url": "/_nuxt/d4832ec71f69a7617df8.js",
    "revision": "21df2830a80c30b0406c80b498fc2760"
  },
  {
    "url": "/_nuxt/e837fde3f1cb68978849.js",
    "revision": "9ef04102a7254ca2f830c8068dfa58ad"
  },
  {
    "url": "/_nuxt/f2982a589e99ee52ebb8.js",
    "revision": "7bb8ce30d8d3c32e0ba0726ff42a5b4f"
  },
  {
    "url": "/_nuxt/f87e558ab336e97a248a.css",
    "revision": "e9dfb4e4eb59c77a91b7be540524fd09"
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
