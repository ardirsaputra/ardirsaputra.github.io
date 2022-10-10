'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f53d18805a89f160eba543bd8b56b5ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5e695776300aff0adba5ccf2608e05f1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb248bad42f7feca9faff6896374f018",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a50c114edbe6d30f31ba95cb9139e0d8",
".git/logs/refs/heads/main": "295449959978acf6d2d4d33fd65348e6",
".git/logs/refs/remotes/origin/main": "2c2f7e35d412de16721ad9925c3ef7c9",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/06/8c10d66045f68e92d9ab8890295e900531fe12": "99465933f6a4e65764831c49d45be320",
".git/objects/07/4ddf8aae3a1c9d1818f47034768d66866e59af": "938b600f1e2b975040e137fba034197f",
".git/objects/0c/3fa0ba75d630378629a5104583484f777447bd": "062642b44dd794f67d29c14d95e99a2c",
".git/objects/10/424a4991038a0bff360e1ea306b73b9088f994": "97c40ee5d488c80cd0825e26876eaf47",
".git/objects/12/9534898acc8292cdad04ec1dac25d6d19accb5": "a25c05fdd38a440389dfe0b1c3a99392",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/1a/0955747c624ef68a8247b65164d27dd165da03": "9a4e618869aa4be2b0380a2f82cd9e62",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/43117a76c0e5c4f8aad79798cdf32f5611bdb6": "eb5589b6aa8fd35a71c8532634b40913",
".git/objects/25/382bea349dd5645254f82bde7683e2e8535fff": "4bb312d9def1e13371e8f5fd023d4ec7",
".git/objects/25/e86074588f647c59eda8b596419531dce1563e": "6c202fff13e72906fd7a740b11e2d1ab",
".git/objects/29/47d2b088159123bab24cf22f558b66e3d4935f": "727d2c11e90ca7a578ca33558c76fe70",
".git/objects/2b/07f04ffb18ae926d9b83ecc7131963995cbb4d": "17bd84d6dcbfec0756550b3f9eda294d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/36/aba07025407086543d7c8a79d80ef9c0ca51ba": "eae249bdda4b818fbb64c1b31c9a3141",
".git/objects/36/b461f5bc03d2e8d4fe78ad206cd6d296335301": "fee5831ecbeff7fa07abcf9ebfd52504",
".git/objects/37/7676d8b02a042897c2b8f80328811dcdc6d854": "3b47e2dcaae5bc7aa65ef8e78c8c037a",
".git/objects/38/24e71afc605eb9b47c1538c6561ace3801f4b9": "df4e9015aed0c5a1811d83e046472605",
".git/objects/38/3ec2d106745ced30fa1e814ff7945726a6570f": "befb90857b50db1e938f1fdc388aaa87",
".git/objects/3b/08ac3c2fb9c142324a724533fec4411c07ff41": "8f9ac4aa9188c300ebe0d194a37c22c3",
".git/objects/3b/d3f89eedc1023124bf45d55fcf7da3ac0f10f9": "8758db2e185d39bfe782fed66e48d830",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/55/877fe9bef690c427c35def260a753643e8a09a": "cce3c0f8bb4d080804d4c45c4aae6124",
".git/objects/58/38b5e3cdef6925a96b5091424f24fd4e928edd": "36cf9c50e2e68fa1e24be09cfd376f12",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/63/28218bc460efced33916af25d80bd498f8d202": "b03843c5b015013c4c77b228e4318aa8",
".git/objects/6d/efb79c181b11ccfd5c1e3ebe737c7dc5f4af41": "be82e3433ea3ec5d948bce35e04679e9",
".git/objects/73/dfcc053246d1bd40b4880719ebc098d37c3d26": "833f2fc7cbbe0de18433740d5542c26a",
".git/objects/77/411464fa29d7777c6e56ff40f6c0372722041b": "208bff51c5f2df6da9c8dc075b53058d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d4da321a647253488dcbc9063ca0730b2f23b7": "2169a54461212998939956fd49eaf4a1",
".git/objects/81/0fd614d21ccf7fe8229994f7d63b57667b292f": "56d72efb5014ee3f3c0f20789fb856a7",
".git/objects/81/9b97439c143ec9c558ae58155cc6a63115c6ef": "4568db456430c8f9e314a3abdb41c08c",
".git/objects/86/cabb8de91dda18d01e825204d473f6926acfb2": "599b58d40ad2bdbac728f01178422ddc",
".git/objects/88/1275d15652de8de29bcbe1a0224be08f8a3733": "cddca53c48f2b48c96ab4b463dc148eb",
".git/objects/88/c523b9a59d21ad77e85f2180c6d49f6e083c21": "8f66f31b2787a57e4ed2d18c9d9b5e23",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/fcf07260f2fa78f716a47196928e71a773fecb": "867c345cd6d2eb28995722d222bbd6d3",
".git/objects/91/5dd8cf7f8c31f289a5142963051d95defd80c3": "70f8b836b81a72928e37994000cc70cc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f8933b30e01d258e013441c99b8321e0dbe40b": "92cfcce58cfef469d78374288440c4bf",
".git/objects/a2/190e9b5bc5f00f987002fe54da88ee332af3dc": "e496339c0d220b356750d9f1013222c6",
".git/objects/a6/6aae02fcede0d4532e8b4812952bf14359789b": "414e1c2bf941bdda15496e6424e9264a",
".git/objects/b0/9bcfdda2a044696d95c21844602a37793282b9": "480f065da37e85b15c6f47535c97c978",
".git/objects/b3/2d1bfbca2d105818129432df8d8a71665445cf": "f5ee848dbf8a383447b72890e7a98c1a",
".git/objects/b4/44f9072b84366ec543b94c56b76fcc51563cfc": "dc31fbf88d85db2696f0620272759df2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e499919d2e4c168c829077aaee1b22298f39d6": "49183b95e6e126ee16628dc756daaf5e",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/cb932098f4ef3992196c343914d6124bb020f2": "3b532c63ce584eab24a5a43a2b53a6ae",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c6/e68d3fa67f47edee3624099667bf261cc48f08": "01b8ca8a60c04b9c9cbfbdd1487e449e",
".git/objects/ca/d6ec01bf3795cdcb1165e3d2ff90b8eee23672": "0ac1e6c681f9c260279baa21921fc751",
".git/objects/cb/33ca7eea6e7f702025861c4e6e4c9fe9ad173d": "3b0bfe541493dec99130bb430a152b3d",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/c08e42d7516257724aeb5b57ab2448fccc176c": "64b1c501218320513165df8cae7a1f69",
".git/objects/d5/12e733edb4886bbaafa728b9dc9b7e15e83d15": "8c7cf5a3581e8e2e2c5a398bb2adce81",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/034ae4bd1df8786be8cc2eb590cc189ccc13a8": "6d5eec2f3321fddc9b28a354ab45b765",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/dc1b9381958684351c6c4bc2ae2c9ef7d9c07d": "6154d8f0bada5f004f9e1b77d9020e6a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/ec/d43d4fc2133def4b4ec3b68e177be0884f6499": "cea4a7d3e2e2f36b7d8803aa86cb4582",
".git/objects/ee/46f70592688f66041a3a6c6a4b5b3cd46a1460": "8c1e229c68ef5adb433e9ba5c4fc7e71",
".git/objects/f3/314679b25b560206527a71be27ba20777122ce": "4e9f204981aaf1d7b8773f901a32e135",
".git/objects/f7/f3211e24dfc5b5dfb18ec10c55296d00f03ef4": "c19557867cbd798bd565e6d2ad4313c8",
".git/objects/fb/d0854a238fb4c96903acb1ac0952c60c2b095c": "8be5809ae677680e447923998ae74b93",
".git/objects/fc/22d4f206a9074dafc69dea968da61dedb1b532": "4b0a10a67178728cf9743aa89b6f5f16",
".git/objects/ff/b6b26391e9edb4770a0a42a928b8ce4dd7b56e": "c97263bd64247cfaeeb4faca6b6ce758",
".git/ORIG_HEAD": "a1a825420e66dd5495d9337bac5cf5b7",
".git/refs/heads/main": "d9fa8e18b31b2ce47e57796b9039b3c4",
".git/refs/remotes/origin/main": "d9fa8e18b31b2ce47e57796b9039b3c4",
"android-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
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
"assets/AssetManifest.json": "de4a40444183eff507a5982f7a6bd386",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1d4f141295034a320d16e854f7cee559",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon-16x16.png": "bc10fd0c91a77f52d79c5cc78f5bcb6d",
"favicon-32x32.png": "c8264fb8f68f0fb67d3296ef672438f3",
"favicon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"favicon.png": "71a85d487afa45bcaeeccba0dbc059b0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"index.html": "d6813927e7b4573ca5d382c317b0b562",
"/": "d6813927e7b4573ca5d382c317b0b562",
"main.dart.js": "f08f0efea268e701cd14835c193d9dcc",
"manifest.json": "1ae5cd77387a411bd786ca19b195ce02",
"ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"README.md": "d12db22138d0798b1f9bcf92dbd8cd90",
"version.json": "12a92ef79835b40a6093bcc932b54998"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
