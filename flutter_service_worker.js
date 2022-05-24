'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a5e2ecc2369554d7ad1589a69bc2a295",
  "assets/assets/app_logo.png": "bd8a15bc2e89a0ad820006b226579cf2",
  "assets/assets/app_logo_source.png": "2c3562c0a866d5db1360257c45e7176e",
  "assets/assets/Doomfist_Hot_cocoa.wav": "fef45512ef2f54d6807eab74e1221840",
  "assets/assets/Doomfist_I_didn't_ask_for_your_opinion.wav": "f25e415be1ef279424d427ba699ad648",
  "assets/assets/Doomfist_More_dumplings.wav": "1b8b8978c26efcc5439870ca0e6dcaa8",
  "assets/assets/Doomfist_They_say_chivalry_is_dead.wav": "bd677b3bf4228c9b2f864688000a110a",
  "assets/assets/Icon-Doomfist.png": "682fe69ca5241b2c08bdf392f9065cfb",
  "assets/assets/Icon-Junkrat.png": "bba858951dcb8e52625a29369e24862b",
  "assets/assets/Icon-Mei.png": "6d73117ba9c946a83021c08f43d2c149",
  "assets/assets/Icon-Reinhardt.png": "ec07cc077c8b8b4b5262e2b0272236c0",
  "assets/assets/Icon-Winston.png": "9daf85c7a801cab37b95fdc52dfe5ba0",
  "assets/assets/Junkrat_Brrring!.wav": "0b78060e5210bdbf8107378ce99653d7",
  "assets/assets/Junkrat_Can't_scare_me.wav": "398f2ae47ec0a1a00757be32f3837887",
  "assets/assets/Junkrat_Coming_up_explodey!.wav": "b8d76f88a8740d525e99379228d992b4",
  "assets/assets/Junkrat_It's_snowing!.wav": "d92de343725d3d636553ae6e73f27673",
  "assets/assets/Junkrat_Ooh,_shiny.wav": "cb6395268566e217a1d0eea3f7befa70",
  "assets/assets/Mei_A-mei-zing!.wav": "1be5a0f11b7e462b98463dcddc007664",
  "assets/assets/Mei_Cold_never_bothered_me.wav": "77bf425fd35fd13a314cd537acee0bee",
  "assets/assets/Mei_Sorry_sorry_sorry_sorry.wav": "adf0ecf0e931b6e2fd8b26a4232006d9",
  "assets/assets/Reinhardt_Are_you_afraid(.wav": "9f941b3ad95fb30a81fdfd9a17476da4",
  "assets/assets/Reinhardt_Are_you_chicken(.wav": "c29fd4dbf95fea2e96e2027fb3941096",
  "assets/assets/Reinhardt_Call_this_cold(.wav": "6f5eb7abf850368c73c64273b16a9df2",
  "assets/assets/Reinhardt_See_my_muscles(.wav": "9f346018e6645af73099758bdb4713f4",
  "assets/assets/Winston_Oh_yeah!.wav": "af34c0c7c72635013c465c38591b8083",
  "assets/assets/Winston_Why_is_it_so_warm(.wav": "72ec08390aeb28602aa75f1aa156e6b1",
  "assets/FontManifest.json": "c95f2ecfacba247b269e7e1cd859030b",
  "assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
  "assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
  "assets/NOTICES": "8fa64f7dc1db47c79b94b63cdf8c862a",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
  "canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
  "canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
  "canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "index.html": "3c8f3e2113dd4cb323621b229aa6b8c6",
  "/": "3c8f3e2113dd4cb323621b229aa6b8c6",
  "main.dart.js": "538311381700c168f8d65857a0676c42",
  "manifest.json": "4e7d6e0c18251fba72efeb8c7075897e",
  "version.json": "0f5c0dc7dbb2da4bef7f4a3864fba461"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
  "index.html",
  "assets/NOTICES",
  "assets/AssetManifest.json",
  "assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
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
    .then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
