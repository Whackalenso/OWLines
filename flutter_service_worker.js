'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "42af90eae4d45574b055ed4a77aed817",
".git/config": "16b5d578947b310a70f462972960ef05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be8f0520fa751232a8882059c6e10dca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "e029a3aad47f2c32698908e09cb6cd3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35df55416fc2f193de61a7e8f96f336c",
".git/logs/refs/heads/main": "bdcf2811934ff2bc1a779c12e0ac39d7",
".git/logs/refs/remotes/origin/main": "b5b61c18580426c39f2c6177b734dc68",
".git/objects/01/639519a75b68786d8faffa3263bda15a383112": "adc2da2cde61c393deff86fa05bb6271",
".git/objects/01/6ab45e1fe4ccc9facd001dabebfc43a22af5cf": "ad21e75003480f5f83ac62696471db65",
".git/objects/02/dc262abb1b150d750fda69f561cb499261dcd0": "6b7d5eee750a3cb83a3c7e08c8194d8e",
".git/objects/06/8be40d41472d3df20bb5732bf665f8891bc7ed": "3d71d123431b8c05e58cacb79b6ceaa9",
".git/objects/06/aadd72e2c84fc8697631dcea72438856bdf577": "ba5c869f45d84b099b0e0b9ea6dcf129",
".git/objects/06/ea6fb4068b8c9e9ad6f50c4794e4b9225feacb": "46ad57df44a5cd7fb65df0e71c6262f4",
".git/objects/07/3e9b9986ad78b0980da92b41a8a2e164d37d61": "53272c6a30047a662ede0592dfaa7f27",
".git/objects/08/70cc2a56a98fbbf82b9aca0364c2e8f48186b2": "25adb7adf8e934c768fe21110cac9504",
".git/objects/0b/a296a7447d6a5e3a4404dd4d6a2f7647bbece2": "267c2a12beb2e8bcde817e5f02db0b46",
".git/objects/0c/d921439739d9b1872ccab19acf947cc87a8fb1": "e7792b4cb7fc71fc28c09c457954610b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/4dac3ac66d9db47d2a70d611900bb32ebbebd7": "d00818f92427064768829c21d4f0b07b",
".git/objects/10/58c22e98661b1da43c6e14c26b7d1fc94fbf88": "609f49c34f087ead41ae6d8fa3801550",
".git/objects/14/f129efa0ae880792c85fdd84ca1fae6a1d2219": "8b35a15c6d53911e6f0b8ac0a517bd79",
".git/objects/15/c11b8da9c5cb0cd0a41bff2e7305f860c4a0f2": "e9ff0dbdc2f7c4d526bf70f071595743",
".git/objects/16/9173162fb019ffffa9bacc95653eaafc6fef44": "bb34f08a4626b074be68974a2954c176",
".git/objects/18/58fa758d349f95a271ce52a19dd16f17e73926": "6dc903568ef0addf32f1d22e5ce34309",
".git/objects/18/97f768007f142175d4e6d65081651bce35a704": "5e480f6e620e52bb916d86d845e995dc",
".git/objects/1c/39162d1b6bce2db26a32d7d1c74fcb2f7c30ef": "c5c218c71dc1929ea184e8a920b28781",
".git/objects/1c/907c9d189060f648c5bfec8da3dc216bc9c21d": "009cc01d5b5ea361092ea5017398c3a7",
".git/objects/1d/24f19636e03c7e4cd0ee4193d13b3a3daee140": "50e235933ba92e485881660a7df1547d",
".git/objects/1f/bbcc36d4f0c3dbdd202e2f695b4689c7e26500": "f2579039fab2d21e13c9b012f6128e65",
".git/objects/22/d516f597cbc5482819978e8e349ee25611b26c": "8c0d42cb15152158833d59edb8cebd7d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/eafce157bbbcd9d4c739f1129f81702122355a": "21efde4230a8404b14f717fd18171f3b",
".git/objects/27/5f08b2d74b696a246845e7b316632024139a41": "9b3ff7d3382156a332bb4ff064baccb7",
".git/objects/2d/085642cef0da89ef2e9b0706388db424deb454": "f37658a7acdf25c6d7ed2fc46f98ece8",
".git/objects/2d/7fb2b295a53cdb56ec4f391b936176a8ace0e6": "f483748e70eb81bd33da6431aaef81e9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/55125404097ce4cbd88526c530266a11d0ac2a": "1d29436dd18606a5eca833f432b7eeb9",
".git/objects/2e/57f012b88434605a09e08db5d590dcbae5004d": "2c9801915008bf19d4d62f6946ad9b35",
".git/objects/2f/22375e525d9eec5139cd0002790e848ecd41e9": "b0f16a5eb2fef5442d981162aeb9d1bc",
".git/objects/2f/cad6d99ce78ecd3a3d631348bed936f943ddb3": "cb91e4177c1ddc042de56b3f5b11628e",
".git/objects/33/8f521e60bae20c28ddee7251f9feaa19d161e2": "599ed66e1c0463348ec9238927a45af4",
".git/objects/35/54a5f763906fe4af2f860b5a2cf81adaa5d945": "3fe38e218ad83455eee4f77e88753197",
".git/objects/36/05a0b9f1d82edb59a7ce109e2545ba0941f021": "38d2e305893bea5c83f66af5e8a3fc95",
".git/objects/39/5215fdbb01cf944af4cc0c9c4a98c5e977e268": "0f67cb79040be6e3e9745eb1e1899b7d",
".git/objects/39/ac91e63af994b873164f7511e497aa4830c6ca": "7551e22d478afc6ddd30eff42711063e",
".git/objects/3a/38649ace1d70f28faa82539a6eca5c0c8313cd": "672062484bc9a26453d9ee485c3e2868",
".git/objects/3c/0a77ef43069dbc435861301c1a7d89b4762fbf": "3b39ffc199c5303c2d1b6cee76ca5753",
".git/objects/40/5a38726754927cfe65beae3420f507cd326f32": "bb85b40febd3c35de45856d8befb6917",
".git/objects/41/579faac01a4bf89b136845a15285afc28acfff": "c6bfaf6a63b2e5714a9e4b66c13cb034",
".git/objects/42/8713e191d84f159104ae3fea93d9d436fdea4e": "05b725021bc6d7bd23bc3f818729f596",
".git/objects/47/5f3571d661ca00e79c7d2e4e9034cb11679427": "95cc42f47318ea939293a9e865e74ea5",
".git/objects/48/360ee7b1d7d30e18412ba61a69a95c7673884c": "464d5af5f2deb73ff4b4a075badeb8f5",
".git/objects/4d/fcd1fbd07d14b42c55cc37dd460b3970252500": "cbc0cfb3c7ecfde92fea54a4ca300537",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/02de88b25d12b14678817c1c395df68f1aa2d0": "f7af4b0131dad1419b71a232c00f3e56",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/bc99630469b90b3fe6b49fb020ee3b47b2109d": "a635fee9b890ec6c6db0f95574fb3ab5",
".git/objects/59/59f95c4f69a287a094701d1f6669d877ed5159": "7b23a486d8e775e4c842fd64044fa175",
".git/objects/64/f43c35e0e1bc04ce0b8c0c40a1e3a12b4383cc": "b1b9445181af83f5568663f1e03507bc",
".git/objects/67/9405829ce105fe2ea55ea19ad4d874a7a0468b": "307ea584b4c904cdae787687e8361115",
".git/objects/6b/7ee85ba73a5a67504d8fac1f2e61c44cd75f51": "f160adad8f734068b78559fcf2402ffe",
".git/objects/6b/e12cd0fb76719dde3a0910dc4f4719b265bd89": "7ca6637747de6962ada3fd9818ed4eea",
".git/objects/6c/061385e84bb639eee12daa8c05993de6452303": "68a111912a262099f902c0a4f855219a",
".git/objects/6d/58c2c13f6892e8618452fcc16f63670addbdd0": "f5d605a71409d79df38840a551728dfa",
".git/objects/6e/b9f8afe701787ae323499c68471cd9f99c4a20": "35db8b88f92b5dc8af84b316b243e794",
".git/objects/71/2fa15166016dd79b07e0783bb1a6b0508b0562": "dc4ade4c615b11c206143be3a302b9cc",
".git/objects/76/2a869f762db287771052a022800354704e5c7e": "b26212e532377e9d07c4087b6a979ad5",
".git/objects/76/7259184c5ebb856b4a2194dbfc0fbce45446a3": "292ad49ade0c784bfa2d26e498fd2086",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/1fb1fd444836d8db1a09b0cc85a78105bb562d": "2e2e9dca4f11a3cbe40f4cd5e7d96b88",
".git/objects/78/686a74312059cb8682d1d8427f13d4a62e0bd1": "37c8af59bf3bbd2e2c42d6c39a440ca8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/372e1625a52e004d03ff9a4f8e6dc91ba6b051": "1af99261816b3e6a19c4cade8d8ce2b4",
".git/objects/7b/f96453b9e2022fc1b076bdd342dd28882917df": "02a05c77c00f077dd5bc480e827afe0f",
".git/objects/7e/94b6d47f90a226c4b3391533bd812bc9db0823": "13d0ecef1aeb67d24db7e0b7f3394e08",
".git/objects/7f/2bf975cb07de676be9aaa43b5ca04c576856c2": "353432d6dabbc1ee223f37085e13e4b2",
".git/objects/7f/5845a834c624249d9b47ee93fb44acb4aea1ec": "8c84d6366865044a1897869e322c22f0",
".git/objects/80/168428c13867676126402db2dea53c375a78a8": "64e009bf9280caad6c8880360e9f0d85",
".git/objects/80/717e31a3c7169644b2d5bf8b02e8ec3e27ada4": "b7063b4780dc942ce8e9857455d1522d",
".git/objects/81/8de317e5147332d77a382c91a69bfe5bcc1e6c": "5e5cf108c98c6606710833d64814feab",
".git/objects/81/bac41122c4f4b42a7d540eef050eed7e0880b6": "da06e625de217fc6bf012be2d05a6e18",
".git/objects/82/2c35dedcc447d63d98ad49f9e3308567237d50": "ff0fce33889487aa8b319aa8ceb4f3c4",
".git/objects/82/c48bbeee309393c444552028364734148b0dfa": "9f2f12ba32da112caad57fc67c86ba2d",
".git/objects/82/c4a0ea9bf5df422fb282bc8551300e9081d4b8": "e8d9f09509c4b0d1d48e80cfa1ce2317",
".git/objects/85/137718f19f49ae685bbad48c6702e77b65e1ff": "6167cf58d07d8f2f7e5060d1502ad6cc",
".git/objects/86/914c9839474e2d861983c84c12402bf6c2d6e6": "3fe76a4c2fad88ff1184ea3373ae3a6e",
".git/objects/86/a990eee5ec7fbca38ab043545465b0ee924c92": "ece014087e18f1a05298d6d3d9b1501f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/3c23fe3a3065b86fe2f959125ddd531ca0355e": "a878b397a97d7fd278fd4271265df66a",
".git/objects/92/3f8b6f9504a3aa45ecdbabe8d4fb17f8c102c1": "ac4c561bbf641aaddcdd6def087779a8",
".git/objects/92/7786221a7be74eab4799143c09ae2c3a348500": "e99fbd97d418ada59eaf88f15999a831",
".git/objects/93/0002dd4b69496b6cbbd023bbc6f84177cb0193": "b4136494f64c9453b738d9c0b251fe7f",
".git/objects/93/143a43fb20c1807bef207317c51e2bef46917e": "f6195d02cd5827dff958db70456123df",
".git/objects/95/f49f70fa737996956bd46b44895b1dd221ea35": "989cf0f2be321f12372a2b5cd7fac7c2",
".git/objects/96/e74d0ce62bf38d9ceacf7ca8e1acb61e72a9cf": "1a655cfbcde68d68e15ced5fe0445e99",
".git/objects/9c/294201125df8588a742a44359f40bfc6c6d4c3": "c9e329d6814554d34071c010cb3b68c2",
".git/objects/9e/512d4d76a45990643d3f1b5bfb2cbcce293da9": "d1068f3b08d1d27b0c32f5dc44fce3f9",
".git/objects/9f/fc9f4156c539f2704f436cac0a9a1cffe4f79d": "ac8f20dadc46eb73390c4bdb5f6bf042",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/39a088d94d85484547dfe2c8932d16f8242948": "a7e8a73ac71a018a34afdc3ed07ac1fb",
".git/objects/a3/e126c9be77f633f8d9dfeeb17bdb1e443b9b2f": "442637b5e38753ac2d88b791a8112365",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1212a4d3721ffc76a627dc47a24bdacacb062f": "37a6a8bde30c0a5e672d28388fe5b27f",
".git/objects/b1/60469add5bd276b8fe20285cacfb26af5f9fc9": "9bb8fe4eb34f278fc42e2bee12cd7baa",
".git/objects/b2/62c1206cb02006bcc1bd33f962fa538e297206": "c23c50ae1cb4d56cd1bc9998de89f015",
".git/objects/b3/8592e5f15fec01201342e2f8c15a0688553672": "d0d799cd194956df502b09e85dc8cd75",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a902997fdc6e8597eca0448e4281c614b620d0": "8c47c13faf843a62df355125aac6c698",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4538e928e00e905b7263236edbcf4cdabb989f": "9d3f8e337e6524dcac38f62bb5bf07ce",
".git/objects/bb/9e8d254c7e2ca1cd4bd39a7eb818624987247e": "1d7aebd24aff79ca37951eb42eacf211",
".git/objects/bc/c348eadd4dbaf28a1fa7ba3adecb46b947adb0": "584bd967d9d2af800f138f8ab3f1f995",
".git/objects/bc/ef7f836901094ceee602c405bef16a552c89ce": "1eac051f60159679c1175b7afce0c32e",
".git/objects/c2/6b8086ede5f07dbf99bc6d33940dc53c4a168a": "997e379daf29e518bf683a6e19e6659c",
".git/objects/cf/47d1f3b02e3cc63739ce034614ccf6a03737e4": "1914375f704547423c5d4c847b095b66",
".git/objects/d0/61f6a96d0bc3f21592eaa156cb4115aa74e12b": "636495679f0ff0acf640c098eead0388",
".git/objects/d2/190b5139486ecf8c655e1cc1d06e8df3ffe249": "38d744ba160ce93006e81e51ecaed9b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/fdd2a83fcd2ebfc8f759d971ccbc52c21d2af0": "99274392a09fdae6eaefa9e2f3578dc0",
".git/objects/da/1b8eec6a83398cca52e9c895fc8ef063a52cbc": "14d6c93b5621a2590c7cf2cbed05f8be",
".git/objects/e1/2b6d9a3ef3c7b8615c47dae39a957ec35144f9": "fe4f943fa85e07ec5e24a22e93940b96",
".git/objects/e4/cbf35a0d731838395675808033f4f3bcf2dcac": "403c542064d3b5f841b8e24c211ac5cd",
".git/objects/e4/e7fe4f01fd2a60d332d25068fab0a93ae71ec3": "1d6ded0d3f9b7431a079687cefab1df0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2ef091ad2276536500f4cfb451ac90485a4bce": "8424e175c7d93dd6d58bae21275272c4",
".git/objects/e6/7906f950df021d5b4b1b6e4dabb984d07b1c74": "5d02622c78539b8aa26647464c2ccabc",
".git/objects/e7/e967266949e7fcc9f0351610d9b9d6e605bb54": "01de66414c605794197fa1060165f729",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24017ed04d52028735e7946ded5cb252fb0582": "c1bc0fe2431c53c6854ac85a75640a94",
".git/objects/ef/692a47f88aa7c0c1648b6e0c477a3482828ad0": "b0233284695c02f913cebc364f7a1f1a",
".git/objects/f5/7feb10927e26d4a047affe4f1c5e846a76fff3": "16a79ce414f0f5927f4403fc5480f20c",
".git/objects/f7/741e8728e9a823ca80e17bc81c2985ca67e72b": "a3d79cbe055246452882f4b65a8ee0ec",
".git/objects/f7/92e5260865dc05d26d39d971db5619b1a2077d": "4977e64ae96054cf49e30a363c80373d",
".git/objects/f9/8f09c987a361355a57ee751d2e8157e4bb06b8": "5146bd1064c7e1f8c0e554787f48d8ee",
".git/objects/f9/c9576de172079c2ef8a090fecd5b76819c98df": "a112cc12d68b30b80a9b049787536294",
".git/objects/fb/c52ca7dc567e0f13af2fc748e170638ea69a63": "a3b0d1225366b51b93361d813e8b7985",
".git/objects/fd/32335d42fde36f0517df147d41541c1b7b0012": "d07fc8fc54f26866339aec4f5e449bc2",
".git/objects/fd/a8058ee41be3e300f6788f000cd53df420340c": "7c5af12599ddfe547d6b540a40c176f7",
".git/ORIG_HEAD": "86acbba271794edc8cc45cf751e848b3",
".git/refs/heads/main": "890dc3dea929705b0b7246b7c71960c8",
".git/refs/remotes/origin/main": "890dc3dea929705b0b7246b7c71960c8",
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
"index.html": "efbfdc1c57f87dcbe1421fad2e6d1cd5",
"/": "efbfdc1c57f87dcbe1421fad2e6d1cd5",
"main.dart.js": "c615a555f4ce664299ed9b6878566c51",
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
