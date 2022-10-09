'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3cc6385f817196b684f75d03ae0ec800",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e8deaa17676d8157e797660d67e8d74",
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
".git/index": "e0d9c4402f9eecd00ecc26233ce66003",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d4807a7144878838d247a39646c39a4",
".git/logs/refs/heads/main": "0c52ef6b561b3e47717eca286f39f52b",
".git/logs/refs/remotes/origin/main": "948deca9ca7cf941d9d2326c242aea06",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/07/4ddf8aae3a1c9d1818f47034768d66866e59af": "938b600f1e2b975040e137fba034197f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/6c66c5cec6447154d255bf244f5387f7e14119": "4e112f06ecc645258c588a7406532d31",
".git/objects/10/424a4991038a0bff360e1ea306b73b9088f994": "97c40ee5d488c80cd0825e26876eaf47",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/1a/0955747c624ef68a8247b65164d27dd165da03": "9a4e618869aa4be2b0380a2f82cd9e62",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/43117a76c0e5c4f8aad79798cdf32f5611bdb6": "eb5589b6aa8fd35a71c8532634b40913",
".git/objects/22/ff0ef1b2e5c1492949bdb3db0f1f64f0fc7ea9": "6925b036b32f443cd169f1cb1dac2daf",
".git/objects/24/905ffda3c3ca956bc8fb00a58546dbd252c56c": "425c9d0d407f3ebbfb15472f4f43cc3d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/382bea349dd5645254f82bde7683e2e8535fff": "4bb312d9def1e13371e8f5fd023d4ec7",
".git/objects/25/e86074588f647c59eda8b596419531dce1563e": "6c202fff13e72906fd7a740b11e2d1ab",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/47d2b088159123bab24cf22f558b66e3d4935f": "727d2c11e90ca7a578ca33558c76fe70",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/2c/2ec3d991eb7a9cd5b0fe724977a701e61b4152": "e3f1558f6b52925d047f658cd587addf",
".git/objects/2c/85218b8de2b77acc4f4360d187529a3b7fda87": "73ef855fd3874567f5351a52ee1d1ba3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/31/48f1d24d62fd25195a95c16cbad87e17afe9c9": "fb19bee52cb38dbe0c9ec14976e0293f",
".git/objects/33/e7dca17b1265bc3903875bc06a7fecf1e13f24": "63b7237d75404497bfe5c866dcb46d2a",
".git/objects/35/d3428e1b774b4b7192412a86977f792922adcd": "fe21364e1905a51b55292dad24dcfebf",
".git/objects/36/841591e577ed5d75f8bbc693f5206ada643845": "82a982ea90e99974874c86fbe934948f",
".git/objects/36/b461f5bc03d2e8d4fe78ad206cd6d296335301": "fee5831ecbeff7fa07abcf9ebfd52504",
".git/objects/37/7676d8b02a042897c2b8f80328811dcdc6d854": "3b47e2dcaae5bc7aa65ef8e78c8c037a",
".git/objects/38/24e71afc605eb9b47c1538c6561ace3801f4b9": "df4e9015aed0c5a1811d83e046472605",
".git/objects/38/3ec2d106745ced30fa1e814ff7945726a6570f": "befb90857b50db1e938f1fdc388aaa87",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/21e8a614f41faf7ac4c98696e30ef783e7d9f6": "b5106c7f75eab414d0e0fe48ca791a49",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4a/6afb55ba5581e668d2b73da25a8996858d1e55": "4071298cedac75acf61908a1853e5194",
".git/objects/4b/922b558ed195e838a0eff7ca48607043582447": "9982bb7499ccc3c929fdb545aeaec670",
".git/objects/4b/b143b65e593c16199038bb10c5198e207794c0": "bbf29dfee37b3b61ddbf61cb5cbc3d12",
".git/objects/4e/26d3a965c004ff4ab0bb4085880132e75c5b1e": "9c5df0357e62a9e180d22233454a37a5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/808a2933c304bc35ede4adf2d2f4378836f354": "5e399b0ebb89940ee66cffdf851ea45d",
".git/objects/58/38b5e3cdef6925a96b5091424f24fd4e928edd": "36cf9c50e2e68fa1e24be09cfd376f12",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/63/28218bc460efced33916af25d80bd498f8d202": "b03843c5b015013c4c77b228e4318aa8",
".git/objects/70/aa7768fe04fad222684e3d81f3e1ea32f641b4": "79279401ccc82c4b845db99d84fc8d97",
".git/objects/73/dfcc053246d1bd40b4880719ebc098d37c3d26": "833f2fc7cbbe0de18433740d5542c26a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/411464fa29d7777c6e56ff40f6c0372722041b": "208bff51c5f2df6da9c8dc075b53058d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/58f759e43c2df1ee23e79fed432cfeb5d6d944": "959c7834ed8f2e655659035dff38bebc",
".git/objects/81/0fd614d21ccf7fe8229994f7d63b57667b292f": "56d72efb5014ee3f3c0f20789fb856a7",
".git/objects/81/9b97439c143ec9c558ae58155cc6a63115c6ef": "4568db456430c8f9e314a3abdb41c08c",
".git/objects/84/aecc976a1ade80b08ff0153650e746609290fa": "993e08e089855912b553686d91dc7f90",
".git/objects/86/cabb8de91dda18d01e825204d473f6926acfb2": "599b58d40ad2bdbac728f01178422ddc",
".git/objects/87/809f4bb9fef2348842b5c9b1c8e9883ab6e439": "f7c32c82478ece943ce98bad0f10f2a3",
".git/objects/88/1275d15652de8de29bcbe1a0224be08f8a3733": "cddca53c48f2b48c96ab4b463dc148eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/5dd8cf7f8c31f289a5142963051d95defd80c3": "70f8b836b81a72928e37994000cc70cc",
".git/objects/93/f2e515c4717629c25ea04ef09ce413cfb888cf": "e6279daad5192d5b3edd8738d2644f5e",
".git/objects/95/48c8cfa61ff58e4c1bbde7349e042e76db4ce9": "270285b347b4581076aa3e4c5bc041da",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f8933b30e01d258e013441c99b8321e0dbe40b": "92cfcce58cfef469d78374288440c4bf",
".git/objects/a2/190e9b5bc5f00f987002fe54da88ee332af3dc": "e496339c0d220b356750d9f1013222c6",
".git/objects/a2/667c21b38c8327e236c65626ae583c1a213d83": "1b76d54a471370e86e6d5e5e27bf9425",
".git/objects/b3/113f8d79d2662bf379b2355d279e3ad1e22e73": "1449420fa4fa332f477edc955ddfbc17",
".git/objects/b3/2d1bfbca2d105818129432df8d8a71665445cf": "f5ee848dbf8a383447b72890e7a98c1a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/cb932098f4ef3992196c343914d6124bb020f2": "3b532c63ce584eab24a5a43a2b53a6ae",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/bb3e54c4453ccde0efd221f8202b48e368fb4f": "1c85abfbb2397807ed11d854a498cc24",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/b303b7516aa7348ccffae7d661ef28ce7cc87a": "68a8d2670c07b21a4a2dc220fc2cd2a1",
".git/objects/d5/5f24074b2b2c7ce31ebd0253e6643cc28dd802": "69ee88e331c62f27ed104e413f95a98c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0602dc1e9ff1ed5b25c3d100cfd94134557560": "1df293d291a6be0cf4235dc3be003194",
".git/objects/dc/034ae4bd1df8786be8cc2eb590cc189ccc13a8": "6d5eec2f3321fddc9b28a354ab45b765",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e7e8eee60bd767b0fbb4e9d2981e5114b351d5": "05f385265ea84797051d1959bcb45842",
".git/objects/df/0671fa11383351af0061d920ad305ba965393d": "d6b264e2ad028ec6da5a8776a3f86567",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/555bc13a5041728356b69986c60a0b0872e86c": "af6a85b3764c9276a05deba889b55c73",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/fc/79d1bcbbe62abae95783702a4a66b56a1fa3a0": "fa3a6d58b0b2f2a615ced23f4cfad3b6",
".git/ORIG_HEAD": "b87a5b766a74127bb45308df63129069",
".git/refs/heads/main": "7a1d70d7ef29ddb6257492b6e6959c35",
".git/refs/remotes/origin/main": "7a1d70d7ef29ddb6257492b6e6959c35",
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
"assets/NOTICES": "804fe1d8c0a189315491f7ef28f02b74",
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
"favicon.ico": "71a85d487afa45bcaeeccba0dbc059b0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"index.html": "1b234883257afa3fc87059432c14c6ee",
"/": "1b234883257afa3fc87059432c14c6ee",
"main.dart.js": "5777b727345faec271a876a38025a4c7",
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
