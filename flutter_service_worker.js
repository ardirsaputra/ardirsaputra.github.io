'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4b7d8d8edf849bcb76f28ad796d0c710",
".git/config": "604014f58657ca27c1ad813b9ab652db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e7fc87d98c8bc6df187583a690b307c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f3fd8664c6d95f46a847c4e2d707af03",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb6d7590544af0a6fae4f75639c9674d",
".git/logs/refs/heads/main": "5a33797bdbb26e8c19ee174119c7973d",
".git/logs/refs/heads/master": "711ab95d3efe7a1964f4778131c7d68e",
".git/logs/refs/remotes/origin/main": "e3e683178b03ec40eda3ffe3c871dd7e",
".git/logs/refs/remotes/origin/master": "ab6744220a628491dab6e3edda1e31ea",
".git/objects/02/41e2469c7dd86fa7ed39d294f234317689c2e2": "69bc264e9462c98faf8129fe6fc4de44",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/76c7559c6c01a3a581e83ef84872bd6a44ef34": "aff6a37aa5266b7fcb6b4abdc5129815",
".git/objects/0b/aa19e991e0face827e998320c3ee09103d17b0": "18ef7ba976f694224e279165cf3359e9",
".git/objects/0f/367a21d107efca93fa159f6ce5d03719e89e24": "4104acf193cde1779bd343f911fdb483",
".git/objects/12/de12ff6a9b49c37db00efb68e2509e95956b2f": "be92f667ec700cf0135675ddc6927bc8",
".git/objects/13/1f9929b5a2f99291a9f09bb494a24b6454314d": "6ab06a70b200cca641a617ee993bc0cb",
".git/objects/13/e142826f2937318e7943714a8eb03aca21ffed": "56081124791ab183392d4a0171a7b47a",
".git/objects/14/e682868b214840f36de9e42060feebdf9c7433": "902b76eff7d789bcf19221612528bbae",
".git/objects/15/9fc403b158b2ebe177eb54253321ff3367cc31": "c2f88dbca797359d72a255d7d3c7935f",
".git/objects/20/59acf66b249e2a2cd34338a91e6eda578ff115": "1353ae852c94a2d93b36f6cf51fa827a",
".git/objects/25/050fb2eccb2a4cf3dfb01443e36aac52529303": "d7a2857e6127b1689a32dcb1705e01e3",
".git/objects/25/4a77d544f73e6c8218945c37e2bed5fe4abfff": "b78742c831bfc7ec74a977d6e3e89ca8",
".git/objects/28/1f24cbce07dbd9b315cec6f6aa712f027b50b1": "fca3dfac486b8c74d3530917872182a9",
".git/objects/2b/1a24b6d70e2b22b5dc04b2fdf5d03114c132ad": "41e99504286333ef8644e9fa8f84feb6",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3e/a23e1ada37bbd9d543ba5d26c719b2764504ad": "47e28649816a42cc5e4831b91326ae6d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/45/728e842b078a5064819f30e55172872b99a5e1": "2de6d13572f2206a99fbda132c036e64",
".git/objects/4e/4673b94ca19baa052c08d60e5530db6ca260bf": "589464e8b72659c559a9485ee6bfa711",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/472304b864e9ca1ca622609150c534c5791cfa": "93e27d5cb9a80da85d1ed03833da5c9a",
".git/objects/55/496a638c44632b013354e5de457b2e30172fd1": "718eb9a12698311aa5067d9809677bcf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/a7e64df518ee50f8941f381e8cb57e2020bcbb": "78778026c7b732128f4f8e429d7a7caf",
".git/objects/5e/7784a2bd52d3a1f1b831568cefb55835ad7585": "30f7e6039de1f96593b67888676ff920",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/5f/47eabe9c8c788c2680fa8d8c5e95e42f6c5645": "0d0c2b3fc1207c1d934527b19cdc48c7",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/269e15e295ad68f52135f3833361a8b819877b": "15f526d30af001b2c7a461965ca9e79c",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/5328ba46411fdad02e4553a046c3baff411840": "66c6c63f89a721aae4135efbc63d8697",
".git/objects/66/ca5dc1d56e5c28d1ef0e4d59cf3d3ca708fb83": "9b2d055d3bf7ea6acacf3c018228a796",
".git/objects/6b/06152df39847e6db3e684b63aacbb45ae8ab4a": "0f5f8a4b3c314bc145c3121499f57539",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/99581eafa4ed1a30df2fb76fb756bc14546527": "0b93ba48419163a0afd10a64e485abeb",
".git/objects/6d/e411a25aef83262dbab241f54ef3f1e5c4f16f": "133d7bfaf2d7f1d57916b34557525b02",
".git/objects/74/bf829ad3a3a5512638db1ac7b9c57a7fbeaaa7": "5af3054aefa7771fbcd04d261d8e73d3",
".git/objects/76/403bb06e1ac6c64f1ca09863d2e94e2538f16f": "63f8e08c3ea0ed8f5ee5978c00ff3f87",
".git/objects/77/267d05b050da9e83eaf91302a9f666094d83e9": "40a38fcee7b8902647360529a26367ac",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/7a/bb24536ec9431cef261265ca9251ddc23965cb": "532e327f5327a2f75039847e15262def",
".git/objects/7b/3c85a5e9fe2994c7eb99a39fcdc923876eb25d": "126a05d618cee44388a5573e35fcc5c9",
".git/objects/7b/bca1d0a4ab703d0edc5cc119d7c2435d2f37a3": "0aa808edab0f4bc3b9e68d04ff0a504b",
".git/objects/7c/68de39cf10c5992e5cb3477e6ad04f5fab618a": "7d5c0109d90e36534f3ca5e121bf7d43",
".git/objects/7e/8fe0dc1565dede08c5ddd4d08401cf56fe0366": "ee279183524532da541312822921072d",
".git/objects/7f/ee4a78a02ac0e8e8cd143088ff28f0ef8dd144": "5f0c0569ef574dd15f6662ae5c78d377",
".git/objects/8a/31696ece6656cbfa285e3ada46b53acd2a5e52": "0db99165962481250d03edb406c41f0f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/ba34d8b275b5c747d164b9d3d0b6a8e874fc5a": "7973760f4563779b35416db7381dc895",
".git/objects/8e/60784c3ae4c7f1c55b0d3df9105e35aa1b1a53": "a32d20d248a52c5a30395e10f37696ae",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/cfbd755b51131772554a630150604bf92e8ca1": "41845a4e514b3fe3d62e9de3ac387827",
".git/objects/96/4856a2d1903ca6a4cd899d44877687f98908bc": "3a6f13c4ca28adf438d3eea1fb854d96",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/9e/56b3bbd0332d4b061c7632f8788c4c080ef7b9": "7c7440e308bce594ee509b84ad5bf378",
".git/objects/a2/1a4c80f017e8989dad4ec6caca8daf07bfe163": "be36895ee71dad6e6938165176696d4b",
".git/objects/a2/b9a773fcea5e67692042e97768177fcb178fbe": "c0b5f2ed3f3c960b3dbec27cabfde748",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/5cdaf154b2b37b9f7e537fc19752f250aa71c4": "a094c0bbf87f8b82fd5d17542ba425f8",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/2201a955a9e72ff3c2e3434a7171911947a531": "8d0303c8c2b1eda65803a6931dcc6dae",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/be/88d3480ce90c8e8480b409f16a1baa86df91a4": "e6cb8f840287f1894940349fe19d8edd",
".git/objects/c2/d6e0108348cf07ae5b672036028fa8fa88113e": "fdd5a175cb769128f3603daaa8fc7c63",
".git/objects/d1/b215ff87a30febe9b4965148103968af0475b3": "2b0d1ee015d34613c660a761ec6eb462",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/ba55a4f6fcf9522289de33330a34f2dbbe5521": "513c9d7807cfbaf1037638413a00c53a",
".git/objects/d8/c32c300c498a73374a5b6991f55b087763291e": "6dd480c70e21ce8667c1c65cc4bd7f4a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/6b953aabb9158cee2b3a26e26f2209db75fc54": "425ad22a6e3d1120caf01654521df936",
".git/objects/da/660e73b402fa19ebebdc4936ff4f7f9f3d7487": "44271425ee06581a437102ee50b987b5",
".git/objects/e1/9c2c39d9af1046dfdd0430db8f6a2eb1f555b2": "63f179a83ae8a6fb4f4260e50bc27aee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/839655d2cf0ec8cb58591dc8a4dc9d8d8dd4a9": "b67378124ab95cc3362bdbde8d26660d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/pack/pack-c3f67b978b0a6b6867934d11e7e71f91e29b1d1b.idx": "bbc564e2702436dc5bf4522f5042efbf",
".git/objects/pack/pack-c3f67b978b0a6b6867934d11e7e71f91e29b1d1b.pack": "be14a3b0f2bacf627f42d733e6069ae5",
".git/objects/pack/pack-c3f67b978b0a6b6867934d11e7e71f91e29b1d1b.rev": "2ae96c8830b756091ab5842ecc412d5a",
".git/ORIG_HEAD": "9a90a43c3efe1c5e55e50df7dd44de9a",
".git/REBASE_HEAD": "9a90a43c3efe1c5e55e50df7dd44de9a",
".git/refs/heads/main": "604ad14a5e588bdb31e21c7ebd239467",
".git/refs/heads/master": "604ad14a5e588bdb31e21c7ebd239467",
".git/refs/remotes/origin/main": "16a14d45f015e4e825f609a29e6db6a1",
".git/refs/remotes/origin/master": "604ad14a5e588bdb31e21c7ebd239467",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
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
"ardiwebsite.png": "b8bbd4b87b8a9db5291a4a667dddd8c9",
"arsdev.png": "70649cef1dd34f4daeee953645ef8b60",
"assets/android-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"assets/android-icon-192x192.png": "d28e2f9c230867dfcca111fcf18c1089",
"assets/android-icon-36x36.png": "f00c845a1fe7f1760cd40025e74f4a5e",
"assets/android-icon-48x48.png": "ecc24d02aca7c00a92a36e88a2fbb822",
"assets/android-icon-72x72.png": "03113a88e1a57bfd51688cba58b20a39",
"assets/android-icon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"assets/apple-icon-114x114.png": "76890f30f88fab0f25c22bf0dd35b9c9",
"assets/apple-icon-120x120.png": "2ed90b608bc5ee52d254345ea4c064a1",
"assets/apple-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"assets/apple-icon-152x152.png": "decd93a995dc8f5b884ad5cb8fd6730b",
"assets/apple-icon-180x180.png": "41ae84ca1ad58419f42770d680724ee3",
"assets/apple-icon-57x57.png": "66412ee8e8c6180ac2d0d6a70e818b88",
"assets/apple-icon-60x60.png": "93450c952632092e628a12772aca770a",
"assets/apple-icon-72x72.png": "03113a88e1a57bfd51688cba58b20a39",
"assets/apple-icon-76x76.png": "a7960e39d672d656126af844d4f8d3f0",
"assets/apple-icon-precomposed.png": "73a84a2b06512012c99f991ba562ccec",
"assets/apple-icon.png": "73a84a2b06512012c99f991ba562ccec",
"assets/ardiwebsite.png": "b8bbd4b87b8a9db5291a4a667dddd8c9",
"assets/arsdev.png": "70649cef1dd34f4daeee953645ef8b60",
"assets/AssetManifest.bin": "83333ffbf5d5d0ae3c8213a6bab95754",
"assets/AssetManifest.bin.json": "f6f7c30932c8d7110017082ea9adf74e",
"assets/AssetManifest.json": "654a3b5081749f986fbeddf67be0be5c",
"assets/bahanorganik.png": "235b3492027515d51fbd23c00ff26aaf",
"assets/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"assets/eco-enzyme.jpg": "528924790250deb504046aadfeedad8b",
"assets/favicon-16x16.png": "bc10fd0c91a77f52d79c5cc78f5bcb6d",
"assets/favicon-32x32.png": "c8264fb8f68f0fb67d3296ef672438f3",
"assets/favicon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"assets/favicon.ico": "71a85d487afa45bcaeeccba0dbc059b0",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/fonts/MaterialIcons-Regular.otf": "61d9d2eb5198b35da3ead0aabbf37f9f",
"assets/koutainternet.jpg": "00e0dff85f73906cae31caa79457a559",
"assets/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"assets/ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"assets/ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"assets/ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"assets/ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"assets/NOTICES": "6fa30f186934312b364618d06b56bb0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5c8b98b33a83e5c61c98581173bf04a5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9e000206a333174b9a110b9ebd9d0c9e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4c17722136389fae647eb47b7c002dea",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/work.flr": "76511e11878610214b7268174e448614",
"bahanorganik.png": "235b3492027515d51fbd23c00ff26aaf",
"browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"eco-enzyme.jpg": "528924790250deb504046aadfeedad8b",
"favicon-16x16.png": "bc10fd0c91a77f52d79c5cc78f5bcb6d",
"favicon-32x32.png": "c8264fb8f68f0fb67d3296ef672438f3",
"favicon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"favicon.png": "e00afddfa678fe8fd8493ec5ca48df95",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "be5ba69b67136b81d0ebf5e576c8c5ea",
"google7636db9107e8d275.html": "52a34f5ebf96e6a1dba0943ebb7d6d2e",
"Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "e00afddfa678fe8fd8493ec5ca48df95",
"icons/Icon-512.png": "be71f4340c1cf78a0aa68421d589bf59",
"icons/Icon-maskable-192.png": "e00afddfa678fe8fd8493ec5ca48df95",
"icons/Icon-maskable-512.png": "be71f4340c1cf78a0aa68421d589bf59",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"index.html": "d547d56129e94ffbfc17a30a08e65320",
"/": "d547d56129e94ffbfc17a30a08e65320",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"main.dart.js": "532f700ef828871cf18bcb3445d03a9c",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"pubspec.lock": "0d35bd8a1a3238f6b6152f635f5f5bbb",
"pubspec.yaml": "e4ed7f081a7c979a09fa139415d1b4af",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "96bc8539bb61ac5fa6e6311fef8ff5ca",
"version.json": "12a92ef79835b40a6093bcc932b54998",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "d3fe4b84691ca7d14d2c5d69ce9eaba5",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"work.flr": "76511e11878610214b7268174e448614"};
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
