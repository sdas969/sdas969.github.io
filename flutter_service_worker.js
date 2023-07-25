'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cb10f8130c42cd66fdfe21733ee6fb58",
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
"assets/fonts/MaterialIcons-Regular.otf": "d8b5683f26bffd017ccdf9c0b7cf514e",
"assets/NOTICES": "fa8195adbe28b77abc5736600cc61acb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
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
"assets/packages/flutter_octicons/lib/fonts/octicons12.ttf": "870d86fb7052ff0f20c929d3c2ddf721",
"assets/packages/flutter_octicons/lib/fonts/octicons16.ttf": "d3277be0d461441a1d8ecbf0d3fd774c",
"assets/packages/flutter_octicons/lib/fonts/octicons24.ttf": "ccce0e4beed2240ca8ad06ac402faf1f",
"assets/packages/flutter_octicons/lib/fonts/octicons48.ttf": "899653286225aa8e1e6002fac6d4ab31",
"assets/packages/flutter_octicons/lib/fonts/octicons96.ttf": "a19b2e77a1a509bc7a7fa528df270166",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "8535e5a1ba6670f49a8bb0099e46937d",
"favicon.png": "346c40a4c9c81c9322ff2f855c3d780e",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "8c93be8c61f7eb31491844fb13451c0d",
"icons/Icon-512.png": "30c9fe35ca6d862d40f3b0b27128bf44",
"icons/Icon-maskable-192.png": "8c93be8c61f7eb31491844fb13451c0d",
"icons/Icon-maskable-512.png": "30c9fe35ca6d862d40f3b0b27128bf44",
"index.html": "39a21991dadc70e79c9b907a4956c8ce",
"/": "39a21991dadc70e79c9b907a4956c8ce",
"main.dart.js": "cb0489aff1d4553913e106231c57c1d9",
"manifest.json": "31407a2f9a4213494858e145011dede5",
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
"assets/AssetManifest.json",
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
