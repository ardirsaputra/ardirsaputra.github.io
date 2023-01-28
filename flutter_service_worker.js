'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f53d18805a89f160eba543bd8b56b5ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f3513cfcd35d2c40eed83481eb859802",
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
".git/index": "77599b6b40064b019adbcee7a1df0c96",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "217762c933f4da6dc9692ede74d0c21a",
".git/logs/refs/heads/main": "07e4690711adcd1e50f6cf689eaeb11a",
".git/logs/refs/remotes/origin/main": "b59f0e3276dd40de9f8bfdcbf25b2e2c",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/04/aafebbcee22988ac685a11426967d2912a81e2": "2f1fa74572d58cabd9d167840dc64291",
".git/objects/06/8c10d66045f68e92d9ab8890295e900531fe12": "99465933f6a4e65764831c49d45be320",
".git/objects/07/4ddf8aae3a1c9d1818f47034768d66866e59af": "938b600f1e2b975040e137fba034197f",
".git/objects/08/70c47b25c3ad7ca1980ba2d5e704c42a404996": "808d14fa94bfbabdb8d00414d2f4d4fc",
".git/objects/0a/167ae088430eb3499701d4eaed940bb55f3e06": "76dee0c007f0e6b9f14c85186720c6ef",
".git/objects/0c/3fa0ba75d630378629a5104583484f777447bd": "062642b44dd794f67d29c14d95e99a2c",
".git/objects/0c/4dbf7c6af84d4246931dd927676fc2b8de4c0c": "dc8777d2e7400e49a6b0ea0ef7352fbc",
".git/objects/10/3d93ced0c7a90a67073e4a20d5bafb53290fec": "5e52f77767bcf75ee8cdd9674fdc68db",
".git/objects/10/424a4991038a0bff360e1ea306b73b9088f994": "97c40ee5d488c80cd0825e26876eaf47",
".git/objects/11/b2db1566f5e1e9ffdb33c09cc5a26e02a5f2a9": "5d3c1c7ce4a098623d71ddf1601be449",
".git/objects/12/9534898acc8292cdad04ec1dac25d6d19accb5": "a25c05fdd38a440389dfe0b1c3a99392",
".git/objects/12/df6aa202ac87f85e18823d3198b30357be775d": "65a8e2feaa111c057b8c103581be242f",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/13/f9a6d62d33572bef1397bf37203d27f925fada": "36337c4942be129a49d454ebaed3c92a",
".git/objects/16/05f0522fc0a156bbb3559bcfe9796296d203ef": "bfffa35cf41323559b488cf3a15d7c52",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/1a/0955747c624ef68a8247b65164d27dd165da03": "9a4e618869aa4be2b0380a2f82cd9e62",
".git/objects/1a/b6019aa9d1b15c5c38a6e36a6cf8b9a225e263": "01bff71f8fd564ca161b9d440bd8c157",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/e15455b39596594dd1a8ea99e6d225e5a9f68b": "2c87a8a3b539cff8b448d9d11e5ebc20",
".git/objects/21/13be8c34a8337d50f3e54465424618874a3718": "6ed0f938bc5a708a56f71fe284572ce1",
".git/objects/22/43117a76c0e5c4f8aad79798cdf32f5611bdb6": "eb5589b6aa8fd35a71c8532634b40913",
".git/objects/24/825db33d0bd90910d2d7ad4797b26c370eae09": "effd22fc974ae689a36ea22ba14da664",
".git/objects/25/382bea349dd5645254f82bde7683e2e8535fff": "4bb312d9def1e13371e8f5fd023d4ec7",
".git/objects/25/957de0d24adaaa97c3239f765804850fbca98b": "eb8060a632fbc43faf591d5753650f9e",
".git/objects/25/e86074588f647c59eda8b596419531dce1563e": "6c202fff13e72906fd7a740b11e2d1ab",
".git/objects/29/47d2b088159123bab24cf22f558b66e3d4935f": "727d2c11e90ca7a578ca33558c76fe70",
".git/objects/2a/0616b1ef0be5bc7c31fe398c09a22f6b9ebe08": "71ed8f230741b374e1fd0aff30a767bf",
".git/objects/2b/07f04ffb18ae926d9b83ecc7131963995cbb4d": "17bd84d6dcbfec0756550b3f9eda294d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/c2ddbcd080f5681c2733f72fa4f7f4c01fd9a7": "6b599ec04d3374dc01618012539afb7a",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/33/d70e69b4301d2b63b6f230faeae69d5bdb1ec0": "6b2a5a738fe6000e03dc70dfe4967e30",
".git/objects/36/aba07025407086543d7c8a79d80ef9c0ca51ba": "eae249bdda4b818fbb64c1b31c9a3141",
".git/objects/36/b461f5bc03d2e8d4fe78ad206cd6d296335301": "fee5831ecbeff7fa07abcf9ebfd52504",
".git/objects/37/7676d8b02a042897c2b8f80328811dcdc6d854": "3b47e2dcaae5bc7aa65ef8e78c8c037a",
".git/objects/38/24e71afc605eb9b47c1538c6561ace3801f4b9": "df4e9015aed0c5a1811d83e046472605",
".git/objects/38/3ec2d106745ced30fa1e814ff7945726a6570f": "befb90857b50db1e938f1fdc388aaa87",
".git/objects/3a/5fa9f68429740e16a287c856094be491631d9f": "d906a2b174e89846f1f49b4b6568facf",
".git/objects/3b/08ac3c2fb9c142324a724533fec4411c07ff41": "8f9ac4aa9188c300ebe0d194a37c22c3",
".git/objects/3b/98a489c15897c3c1cd34cd86ee72e4009eafc6": "531860c8a486b6e122c0cb7ccd1127b9",
".git/objects/3b/d3f89eedc1023124bf45d55fcf7da3ac0f10f9": "8758db2e185d39bfe782fed66e48d830",
".git/objects/3c/6975d0217a10c4961fd81264f45a285f48385b": "4b5f43ca955ab012483b2c99c37972a3",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/dbd361fc036e5f0c31694a4479d94018996ad7": "c644aa9f70afc8440919831bcfd79cc8",
".git/objects/41/a54d03c70c0c4eb4047aa688e36c3e3bd6ff60": "1b65ef6690a645467276cea71c50f91c",
".git/objects/49/dcd255122ee826f606adc891496b006525aa68": "cdebda2140ee6e06b92ba1ea370b4c17",
".git/objects/4b/50a9733aff429ca5d1ac74b9d3c8feadc8c206": "5b64fed183d52ce52264e136a0381215",
".git/objects/50/b105b84d205df487e72f968f401fc59c9632da": "6a387b17c7ee24e7d8c7f2c563b3b674",
".git/objects/51/b02a3ae0350e6346421935c14c78e837426b85": "c622a171977f81d2b2a89a197352585c",
".git/objects/55/877fe9bef690c427c35def260a753643e8a09a": "cce3c0f8bb4d080804d4c45c4aae6124",
".git/objects/56/5f31cebab7db626edd428f1716a6f74a04a4d9": "7c716cec1aa9dffb72a7715984fb3c00",
".git/objects/57/41babd77769f08c1ad09e3ca049949a387fa80": "2a39c805f2ee91662d957534eaa02dbb",
".git/objects/58/38b5e3cdef6925a96b5091424f24fd4e928edd": "36cf9c50e2e68fa1e24be09cfd376f12",
".git/objects/59/41eb7d3d330780d4b6a2f07e2639b887f8af02": "bfa0521d0818409fede012cfe4162589",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/5f/73f2ec4a27f5b79a6b6c8f3d7972f1026638e8": "3c0cd1670ff46bc2e4d084ad750cd18f",
".git/objects/63/28218bc460efced33916af25d80bd498f8d202": "b03843c5b015013c4c77b228e4318aa8",
".git/objects/68/6e501133708226e713297b3ff9ea685ba9c78f": "4093e77b10c271bf5ab14b26f8ad4f8f",
".git/objects/68/feb3d3e3e62b0b1def2d49145c3d45d47d7234": "fb603cc57ceda5fdba5478b08431de74",
".git/objects/6d/efb79c181b11ccfd5c1e3ebe737c7dc5f4af41": "be82e3433ea3ec5d948bce35e04679e9",
".git/objects/71/c250621d65c5d67f9f086cd76ab85f1e95bea9": "d7029ac10166dae72bdb1899fec4402f",
".git/objects/73/dfcc053246d1bd40b4880719ebc098d37c3d26": "833f2fc7cbbe0de18433740d5542c26a",
".git/objects/75/3d53cf002e318257166417b6622fe2b246d6fb": "ed1ac520c6b3f98d2c4514521b8b9f9a",
".git/objects/75/490d9d03179134c988b762288abe6b146a8852": "6c46fb440c2f343bc1aa660577b4531f",
".git/objects/75/9b18bcd2a0479a6eaeae38b26226c549f1d9fb": "251ffbaaa4ade19793f32650a06aed9e",
".git/objects/77/411464fa29d7777c6e56ff40f6c0372722041b": "208bff51c5f2df6da9c8dc075b53058d",
".git/objects/79/2b3007e1daae3e2d9f101d361ced3625679a37": "6ddc2729ab1eb5c47df92b3da7ed8539",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/7eaad26eeadff7b84a7d8476b4899286f4ad09": "1f0f5d635922db7c470633b9f340c43a",
".git/objects/80/d4da321a647253488dcbc9063ca0730b2f23b7": "2169a54461212998939956fd49eaf4a1",
".git/objects/81/0fd614d21ccf7fe8229994f7d63b57667b292f": "56d72efb5014ee3f3c0f20789fb856a7",
".git/objects/81/3d2f57ba2c1428a367ba2bac0d973fd6b7def5": "1652faac08852953b9622184c4b8a725",
".git/objects/81/9b97439c143ec9c558ae58155cc6a63115c6ef": "4568db456430c8f9e314a3abdb41c08c",
".git/objects/86/cabb8de91dda18d01e825204d473f6926acfb2": "599b58d40ad2bdbac728f01178422ddc",
".git/objects/87/a49682dc4bd328a77c6ab4a4ec99ddb35fadf8": "89468f16263f07bde34cb027040169c0",
".git/objects/87/c49eb7534813333c90b5a3bda1d89dbe7639ec": "cc0521a0f6fe7668ff69eef024d74601",
".git/objects/87/c600f2c350f3f78f027cafa5a79be0166f677d": "e2b6bc7fbf5826ad1fa20e086b89dd35",
".git/objects/88/1275d15652de8de29bcbe1a0224be08f8a3733": "cddca53c48f2b48c96ab4b463dc148eb",
".git/objects/88/c523b9a59d21ad77e85f2180c6d49f6e083c21": "8f66f31b2787a57e4ed2d18c9d9b5e23",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d7395c4ed66254d6bf18fb822a72eda4160aa4": "280d383ff798fa1df57f6940d09bcd71",
".git/objects/89/f8853913b9a43f1927e23563a242d3ab80b6ac": "71bf427c83969e25cb2947e6b1f20a9c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0fcd55a6b09956cb4ad84f6b1b05ac421958e8": "c9a2c5fac40e68fb5601a5b90c70b25f",
".git/objects/8b/fcf07260f2fa78f716a47196928e71a773fecb": "867c345cd6d2eb28995722d222bbd6d3",
".git/objects/91/5dd8cf7f8c31f289a5142963051d95defd80c3": "70f8b836b81a72928e37994000cc70cc",
".git/objects/93/0f781c4fc25f462e90e736063375a88f2c200d": "49c7aed2154d53ff094de90b7ee1d47f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/30aae1e4f90c1ef53d35a99ce42c04f71603c6": "a56a0363baac76a6c35388cf3037b9af",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/9a/4014d2b58170cc0adcaa8e43471f7059423da3": "22cc7d6c1ef640584b2c246a7672eed5",
".git/objects/9c/0bf2552ebe4129f140fa1c86a6313ce8e20fd0": "92b35adf9696a773f1c34ebdae2d795f",
".git/objects/9c/47f3d37ef51cbd02f5fc4d0c4bcb07a272a151": "88a873f5d2995ab849594c2a406af354",
".git/objects/9c/90e3d695a50791be7062c7ecc9ccf1eacaead5": "82bf583f4d227e2a58fa1577d0747941",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/788fe4feea1c13882ebf9354cd5c1cf7db6c58": "f655baee23d229a79242153751f9a5d3",
".git/objects/a1/f8933b30e01d258e013441c99b8321e0dbe40b": "92cfcce58cfef469d78374288440c4bf",
".git/objects/a2/190e9b5bc5f00f987002fe54da88ee332af3dc": "e496339c0d220b356750d9f1013222c6",
".git/objects/a4/70bb359c1e5e6c767e9f56b7a7871e061b9cef": "6bffa93a0173d143f0f80d73bd4bbc0f",
".git/objects/a6/6aae02fcede0d4532e8b4812952bf14359789b": "414e1c2bf941bdda15496e6424e9264a",
".git/objects/a6/bb536f62a05d927d2ae9437414fd5d3e1ce14e": "7dcd0125008fa3b251e1547d775e9265",
".git/objects/a7/ccb1daed1c9978cd6fa2a8fe60e2b6f1a25796": "317c2d3179cb345066fad1cc87eaab9f",
".git/objects/a9/fc1281a8750dbb827e55450f39fa2d74911bdd": "0eb74c82368eacbf25b629742a1cf0e7",
".git/objects/b0/9bcfdda2a044696d95c21844602a37793282b9": "480f065da37e85b15c6f47535c97c978",
".git/objects/b1/017aaeabdc809db6b842b6133a991c6332dc40": "ddf1b450b99d7c7e01b448b9d313d295",
".git/objects/b1/06fda78b209e05d6a9607dd531f4d39d945b38": "8403cb4529565b952433bf9a4bca18e2",
".git/objects/b2/218ff5003890cd286a68b296b1b7bdf0d7d365": "12f93db583d37b85d9d4bd79435df16c",
".git/objects/b3/2d1bfbca2d105818129432df8d8a71665445cf": "f5ee848dbf8a383447b72890e7a98c1a",
".git/objects/b4/44f9072b84366ec543b94c56b76fcc51563cfc": "dc31fbf88d85db2696f0620272759df2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e499919d2e4c168c829077aaee1b22298f39d6": "49183b95e6e126ee16628dc756daaf5e",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c2/fb93bb995d73ff0f0fed1acdb70d94e2c98606": "6f8058ff40c0157111a04dcc7ff2c797",
".git/objects/c3/cb932098f4ef3992196c343914d6124bb020f2": "3b532c63ce584eab24a5a43a2b53a6ae",
".git/objects/c4/2f9955f9a920b1777b450ddc2a0e37fc981f2e": "349c0793d923d92e62dccfdd78dcc28b",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c6/0dbd125c39508207fdfa462c685ad4f4b2f57e": "20ab174aa450424500fce0c34b9f7333",
".git/objects/c6/e68d3fa67f47edee3624099667bf261cc48f08": "01b8ca8a60c04b9c9cbfbdd1487e449e",
".git/objects/ca/d6ec01bf3795cdcb1165e3d2ff90b8eee23672": "0ac1e6c681f9c260279baa21921fc751",
".git/objects/cb/33ca7eea6e7f702025861c4e6e4c9fe9ad173d": "3b0bfe541493dec99130bb430a152b3d",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/e717b0bcb4526680ce954ef802f4d8783e8aa4": "1cea094989e2b37d4986437074aaa4f4",
".git/objects/d2/899f876021d36f1466ce5170f0214d09df644f": "637d0bc28bbd676ec7505fd08ae989a7",
".git/objects/d4/c08e42d7516257724aeb5b57ab2448fccc176c": "64b1c501218320513165df8cae7a1f69",
".git/objects/d5/12e733edb4886bbaafa728b9dc9b7e15e83d15": "8c7cf5a3581e8e2e2c5a398bb2adce81",
".git/objects/d6/011f859b0f57f0fe918739085e7f36cfd0e526": "541611e80a07c59ef63c07d2c0ee5954",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c3bc0c2cf66e849b4d691378ae19cfe4879425": "a8fb005619e817b94e8dd09af11466e9",
".git/objects/dc/034ae4bd1df8786be8cc2eb590cc189ccc13a8": "6d5eec2f3321fddc9b28a354ab45b765",
".git/objects/dc/5dd52d06bca3c5179ce11b08c41b46faf9456f": "306986cc485422ee1e95f8811d058abf",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/0d71915b1f30a14d813ec5f6b11984e6787006": "bba628a8cbb1093fe0d8005684c6de9a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/dc1b9381958684351c6c4bc2ae2c9ef7d9c07d": "6154d8f0bada5f004f9e1b77d9020e6a",
".git/objects/eb/27ded1d32dcbc98a7b41bb9d3919e45c3921fc": "a0ad3456203f51388bdc5d6ebee515ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/ec/d43d4fc2133def4b4ec3b68e177be0884f6499": "cea4a7d3e2e2f36b7d8803aa86cb4582",
".git/objects/ec/dc05d4c446a8a9385020d3fc1ba370198b9e46": "dc753e188cb4b4ed33776300086a6791",
".git/objects/ee/46f70592688f66041a3a6c6a4b5b3cd46a1460": "8c1e229c68ef5adb433e9ba5c4fc7e71",
".git/objects/ef/7e8b9d6c44079b07b5502ab3a53683f0551fff": "8b51fa1fc2355f423cae5fb24d2d37bc",
".git/objects/f3/314679b25b560206527a71be27ba20777122ce": "4e9f204981aaf1d7b8773f901a32e135",
".git/objects/f4/9a88155ad6aa1b894192cdd2c4777f3c725b72": "1f028af2e4991158285b742eb97cd293",
".git/objects/f5/40919001ca25ab432f01f3bd36e7ca43d5fe69": "042092d8d62ee0fd5088686428b77a97",
".git/objects/f7/f3211e24dfc5b5dfb18ec10c55296d00f03ef4": "c19557867cbd798bd565e6d2ad4313c8",
".git/objects/fb/789e795ad3b2d96a1854757569768ce7a90039": "c6e7bc80260e0260cdddeb1061ff3976",
".git/objects/fb/d0854a238fb4c96903acb1ac0952c60c2b095c": "8be5809ae677680e447923998ae74b93",
".git/objects/fc/22d4f206a9074dafc69dea968da61dedb1b532": "4b0a10a67178728cf9743aa89b6f5f16",
".git/objects/fd/5a661948f4a3ad5a0634a6a232acbf8d34c8f2": "9cda4e825f498f44fca588ec74be8a56",
".git/objects/ff/b6b26391e9edb4770a0a42a928b8ce4dd7b56e": "c97263bd64247cfaeeb4faca6b6ce758",
".git/ORIG_HEAD": "af911b0e59e7e1f2ff539114274b597f",
".git/refs/heads/main": "af911b0e59e7e1f2ff539114274b597f",
".git/refs/remotes/origin/main": "af911b0e59e7e1f2ff539114274b597f",
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
"assets/AssetManifest.json": "de4a40444183eff507a5982f7a6bd386",
"assets/bahanorganik.png": "235b3492027515d51fbd23c00ff26aaf",
"assets/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"assets/eco-enzyme.jpg": "528924790250deb504046aadfeedad8b",
"assets/favicon-16x16.png": "bc10fd0c91a77f52d79c5cc78f5bcb6d",
"assets/favicon-32x32.png": "c8264fb8f68f0fb67d3296ef672438f3",
"assets/favicon-96x96.png": "ad0d52d20ffa0fab3c134933dfd48f80",
"assets/favicon.ico": "71a85d487afa45bcaeeccba0dbc059b0",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/koutainternet.jpg": "00e0dff85f73906cae31caa79457a559",
"assets/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"assets/ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"assets/ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"assets/ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"assets/ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"assets/NOTICES": "4305d5754e7cbea5ad7bc8630cfec357",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"assets/work.flr": "76511e11878610214b7268174e448614",
"bahanorganik.png": "235b3492027515d51fbd23c00ff26aaf",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"eco-enzyme.jpg": "528924790250deb504046aadfeedad8b",
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
"index.html": "db7773f8ce66bd344925e926be6fb42c",
"/": "db7773f8ce66bd344925e926be6fb42c",
"main.dart.js": "f62d69aa1337878809e0602010ab5ac0",
"manifest.json": "1ae5cd77387a411bd786ca19b195ce02",
"ms-icon-144x144.png": "44da4a064cdbc3166cef17744cb0353f",
"ms-icon-150x150.png": "39e23f961c97678ca6084c321a0ca4f8",
"ms-icon-310x310.png": "88036c1ff6011fbf2a36413da0753e8e",
"ms-icon-70x70.png": "d7b27a03c61b5b6c85fbcdf6f220fe2f",
"README.md": "d12db22138d0798b1f9bcf92dbd8cd90",
"version.json": "12a92ef79835b40a6093bcc932b54998",
"work.flr": "76511e11878610214b7268174e448614"
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
