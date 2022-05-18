'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/OWLines/assets/AssetManifest.json": "f29faf72e7fc8392e131aaf2a0c7492c",
"/OWLines/assets/assets/app_logo.png": "bd8a15bc2e89a0ad820006b226579cf2",
"/OWLines/assets/assets/app_logo_source.png": "2c3562c0a866d5db1360257c45e7176e",
"/OWLines/assets/assets/Doomfist_%2520Hot%2520cocoa.wav": "fef45512ef2f54d6807eab74e1221840",
"/OWLines/assets/assets/Doomfist_%2520I%2520didn't%2520ask%2520for%2520your%2520opinion.wav": "f25e415be1ef279424d427ba699ad648",
"/OWLines/assets/assets/Doomfist_%2520More%2520dumplings.wav": "1b8b8978c26efcc5439870ca0e6dcaa8",
"/OWLines/assets/assets/Doomfist_%2520They%2520say%2520chivalry%2520is%2520dead.wav": "bd677b3bf4228c9b2f864688000a110a",
"/OWLines/assets/assets/Icon-Doomfist.png": "682fe69ca5241b2c08bdf392f9065cfb",
"/OWLines/assets/assets/Icon-Junkrat.png": "bba858951dcb8e52625a29369e24862b",
"/OWLines/assets/assets/Icon-Mei.png": "6d73117ba9c946a83021c08f43d2c149",
"/OWLines/assets/assets/Icon-Reinhardt.png": "ec07cc077c8b8b4b5262e2b0272236c0",
"/OWLines/assets/assets/Icon-Winston.png": "9daf85c7a801cab37b95fdc52dfe5ba0",
"/OWLines/assets/assets/Junkrat_%2520Brrring!.wav": "0b78060e5210bdbf8107378ce99653d7",
"/OWLines/assets/assets/Junkrat_%2520Can't%2520scare%2520me.wav": "398f2ae47ec0a1a00757be32f3837887",
"/OWLines/assets/assets/Junkrat_%2520Coming%2520up%2520explodey!.wav": "b8d76f88a8740d525e99379228d992b4",
"/OWLines/assets/assets/Junkrat_%2520It's%2520snowing!.wav": "d92de343725d3d636553ae6e73f27673",
"/OWLines/assets/assets/Junkrat_%2520Ooh,%2520shiny.wav": "cb6395268566e217a1d0eea3f7befa70",
"/OWLines/assets/assets/Mei_%2520A-mei-zing!.wav": "1be5a0f11b7e462b98463dcddc007664",
"/OWLines/assets/assets/Mei_%2520Cold%2520never%2520bothered%2520me.wav": "77bf425fd35fd13a314cd537acee0bee",
"/OWLines/assets/assets/Mei_%2520Sorry%2520sorry%2520sorry%2520sorry.wav": "adf0ecf0e931b6e2fd8b26a4232006d9",
"/OWLines/assets/assets/Reinhardt_%2520Are%2520you%2520afraid(.wav": "9f941b3ad95fb30a81fdfd9a17476da4",
"/OWLines/assets/assets/Reinhardt_%2520Are%2520you%2520chicken(.wav": "c29fd4dbf95fea2e96e2027fb3941096",
"/OWLines/assets/assets/Reinhardt_%2520Call%2520this%2520cold(.wav": "6f5eb7abf850368c73c64273b16a9df2",
"/OWLines/assets/assets/Reinhardt_%2520See%2520my%2520muscles(.wav": "9f346018e6645af73099758bdb4713f4",
"/OWLines/assets/assets/Winston_%2520Oh%2520yeah!.wav": "af34c0c7c72635013c465c38591b8083",
"/OWLines/assets/assets/Winston_%2520Why%2520is%2520it%2520so%2520warm(.wav": "72ec08390aeb28602aa75f1aa156e6b1",
"/OWLines/assets/FontManifest.json": "c95f2ecfacba247b269e7e1cd859030b",
"/OWLines/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"/OWLines/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"/OWLines/assets/NOTICES": "8fa64f7dc1db47c79b94b63cdf8c862a",
"/OWLines/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"/OWLines/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"/OWLines/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"/OWLines/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"/OWLines/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"/OWLines/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/OWLines/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/OWLines/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/OWLines/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"/OWLines/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"/OWLines/index.html": "73948aa1336442e5b56a1349428a7d1c",
"/": "73948aa1336442e5b56a1349428a7d1c",
"/OWLines/main.dart.js": "4ebb07bb854d2cb96626bc556cb8e2c0",
"/OWLines/manifest.json": "4e7d6e0c18251fba72efeb8c7075897e",
"/OWLines/version.json": "0f5c0dc7dbb2da4bef7f4a3864fba461"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"/OWLines/main.dart.js",
"/OWLines/index.html",
"/OWLines/assets/NOTICES",
"/OWLines/assets/AssetManifest.json",
"/OWLines/assets/FontManifest.json"];
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
    .then((cache) =>  {
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
