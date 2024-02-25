'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"android-icon-192x192.png": "d28e2f9c230867dfcca111fcf18c1089",
"android-icon-36x36.png": "f00c845a1fe7f1760cd40025e74f4a5e",
"android-icon-48x48.png": "ecc24d02aca7c00a92a36e88a2fbb822",
"android-icon-72x72.png": "03113a88e1a57bfd51688cba58b20a39",
"android-icon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"apple-icon-114x114.png": "76890f30f88fab0f25c22bf0dd35b9c9",
"apple-icon-120x120.png": "2ed90b608bc5ee52d254345ea4c064a1",
"apple-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"apple-icon-152x152.png": "decd93a995dc8f5b884ad5cb8fd6730b",
"apple-icon-180x180.png": "41ae84ca1ad58419f42770d680724ee3",
"apple-icon-57x57.png": "66412ee8e8c6180ac2d0d6a70e818b88",
"apple-icon-60x60.png": "93450c952632092e628a12772aca770a",
"apple-icon-72x72.png": "03113a88e1a57bfd51688cba58b20a39",
"apple-icon-76x76.png": "a7960e39d672d656126af844d4f8d3f0",
"apple-icon-precomposed.png": "73a84a2b06512012c99f991ba562ccec",
"apple-icon.png": "73a84a2b06512012c99f991ba562ccec",
"arsdev.png": "70649cef1dd34f4daeee953645ef8b60",
"assets/AssetManifest.bin": "0702664d092194790edfe804a0fb1348",
"assets/AssetManifest.bin.json": "b13e514c10c293144aed67daa47a1474",
"assets/AssetManifest.json": "de4a40444183eff507a5982f7a6bd386",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "526a731bccad5657978790206ac06ba2",
"assets/NOTICES": "cbdbdb6783dc91d2e9d7dc36e8c09ae9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "bc10fd0c91a77f52d79c5cc78f5bcb6d",
"favicon-32x32.png": "c8264fb8f68f0fb67d3296ef672438f3",
"favicon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"favicon.png": "71a85d487afa45bcaeeccba0dbc059b0",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"index.html": "71b723ca3e0f218af85d2794af724128",
"/": "71b723ca3e0f218af85d2794af724128",
"main.dart.js": "3bbf9154dc03d8f29c9673cd8ea87d8e",
"manifest.json": "1ae5cd77387a411bd786ca19b195ce02",
"ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
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
