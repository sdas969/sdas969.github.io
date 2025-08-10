'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cb10f8130c42cd66fdfe21733ee6fb58",
"assets/AssetManifest.bin.json": "744a8e4392af8dbdcb1d85655b960209",
"assets/AssetManifest.json": "22542f833fc79bd1a77fda86c7b92133",
"assets/assets/corona.png": "a932f9ce1e1d5f2803dbfc2e41950f1d",
"assets/assets/lottie/corona.json": "582483176fea76723b2d9bc515603fbb",
"assets/assets/lottie/prevention.json": "2ef9baccc486e3fd118bade29fa3790e",
"assets/assets/prevention.png": "4971b0123d6291088abbf1198a29e59f",
"assets/assets/preventions/disinfect.png": "b5482a0c3e6d7b647f559739189605e8",
"assets/assets/preventions/handwash.png": "404918b61bb8716fd7678b26585d233c",
"assets/assets/preventions/home.png": "1968048f8fffccdfed48daf29f88d9dc",
"assets/assets/preventions/mask.png": "dcc0c3b6c9faa5e6e5a8d973760e7b84",
"assets/assets/preventions/social_distancing.png": "0a706b900ff57bc3abb2981cb196b87c",
"assets/assets/preventions/vaccination.png": "eb4a62f91cdabd042ae36abb087b05a9",
"assets/assets/symptoms/cough.png": "4670226334f860d1b4bfd20c1e8e8fe6",
"assets/assets/symptoms/fatigue.png": "9a0eeccc6b33afefce99b0df55615b8a",
"assets/assets/symptoms/fever.png": "60b9cf5d89c05447067ba934e0272540",
"assets/assets/symptoms/headache.png": "d2ab52ec62580fa604337a3b04f33854",
"assets/assets/symptoms/smelling.png": "37fbbf4674af8154b3777c378c08250e",
"assets/assets/symptoms/vomiting.png": "67d06e24caa0675a0950549cb9340873",
"assets/FontManifest.json": "a2591277a1ad20f1153b767876b16115",
"assets/fonts/MaterialIcons-Regular.otf": "848205487683cc03f3e4ff7f01af3127",
"assets/NOTICES": "69df42c579569f93092528cda034abe7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "f4129dc4687db3424426f77209eeda56",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "13b08b625158861df325f1dcf21164b4",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "3fb8d0aa42860e8db819f5d3c65834c5",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_octicons/lib/fonts/octicons12.ttf": "7775d37fdb1296048c73e860a4089eb9",
"assets/packages/flutter_octicons/lib/fonts/octicons16.ttf": "40bb0037b262c1b53a18a00d8d183e8e",
"assets/packages/flutter_octicons/lib/fonts/octicons24.ttf": "c099e2e296c3d6cb7dfa0247dcb9fffa",
"assets/packages/flutter_octicons/lib/fonts/octicons48.ttf": "899653286225aa8e1e6002fac6d4ab31",
"assets/packages/flutter_octicons/lib/fonts/octicons96.ttf": "a19b2e77a1a509bc7a7fa528df270166",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "8535e5a1ba6670f49a8bb0099e46937d",
"favicon.png": "346c40a4c9c81c9322ff2f855c3d780e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9083a17a45e55b73d5f35cae46ee3dba",
"icons/Icon-192.png": "8c93be8c61f7eb31491844fb13451c0d",
"icons/Icon-512.png": "30c9fe35ca6d862d40f3b0b27128bf44",
"icons/Icon-maskable-192.png": "8c93be8c61f7eb31491844fb13451c0d",
"icons/Icon-maskable-512.png": "30c9fe35ca6d862d40f3b0b27128bf44",
"index.html": "7e0359e9e545f1f9f86a1582cf3c84dc",
"/": "7e0359e9e545f1f9f86a1582cf3c84dc",
"main.dart.js": "02e0967f63d11b02bf9e0ba827ebd72f",
"manifest.json": "0bac395e6f90fce9c48d505284d40be9",
"splash/img/dark-1x.png": "7bc6338a9d61523146f0acca87273f06",
"splash/img/dark-2x.png": "43fcc2c47613a1b58ef298357df7ff30",
"splash/img/dark-3x.png": "26edfd45553ce606309c64648a014377",
"splash/img/dark-4x.png": "4cac23c4087343fc9f79d9478471db8b",
"splash/img/light-1x.png": "7bc6338a9d61523146f0acca87273f06",
"splash/img/light-2x.png": "43fcc2c47613a1b58ef298357df7ff30",
"splash/img/light-3x.png": "26edfd45553ce606309c64648a014377",
"splash/img/light-4x.png": "4cac23c4087343fc9f79d9478471db8b",
"version.json": "2bc89d9b5ac60f15f6d64a1992f88562"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
