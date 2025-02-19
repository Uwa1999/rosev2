'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b305fa8986ef32739ce89fa194e7ddc6",
"version.json": "ddff596fd57d49e508934e01d0c8ae65",
"index.html": "2bf625e98631db4941e21bc23196e09b",
"/": "2bf625e98631db4941e21bc23196e09b",
"main.dart.js": "0c80552f7eca8e6768480815bf996599",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"otto.png": "1559be76e554b564380711f56bbe3850",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/otto.png": "1559be76e554b564380711f56bbe3850",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e81fa0ef589fc0062f79af2bfceb93b7",
".git/config": "0812c712c95a697f4551c7675e036cca",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/6f/ca4a094761f45d01166203af408f3e64c0995a": "0a62c2bbb8d9921e1f33efbcf2418ed9",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/33/da7cbd99bc8ef2c8d3fbdaa1032f13e1c52728": "675c29904d2f056ba5c0cbcac45159aa",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/d0/af7696de013e08b7929c8cd92e73912874c31b": "1583cb56dd28e545a1fca3220578fd65",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/18d72c0b0d367e1ec8a9252982e2d179564c3a": "cec5c37338a537765c017c15417401f1",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/17ebdf3f81ffa76421a0587d08191f7a58cd86": "aea3b388fd1ef1d1179ff0ffcb712a52",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/1f702b7ed018c4d193b22b07a0c065ed5bbe3c": "130a335fdc1f5262adc506a89cddb31e",
".git/objects/c7/ed58ca74fc8071ba2310aa4d5728fdec90e25e": "481112fc85fa3527fe703598d9cefb1e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ec/3672217dd66b0d6561908ea2d4bc9e15339715": "6337ac3da0ccf777d9dbfcea6c83a5bb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/6f692c0b14522a7206040664fd64ac81230dc5": "1a06cf9f7eefe202ac0c38709e23e432",
".git/objects/73/5a86f347943f0bf8e42d63852788119af76cf5": "9e1355d7fbe7aa0041e079ca1e1c08b8",
".git/objects/80/367b210c652a0354ace7a457e58306d05c513a": "62e26b979957a75a48c9ed0cb193dd63",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/786133338dd6ce13ce674bf5133475fd246180": "64a3e0cdd3aaaadafa337ddd20340386",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/4260a5e6196317429ae490857100fbe25154eb": "b60608dbe9981dd4e5a8263cca6021e2",
".git/objects/08/fb0841168bd5782ee26718f31ae1721b429089": "4d8883c4311597c8dc4ede08d5163d1f",
".git/objects/39/221d304f3ee0a0f3698ebf9d7b6b099fdcc9f6": "67b36ee5ba88668ee381f51ffba8f3ea",
".git/objects/64/d1711d954180042850f0bf9c3efa64cc94dc1c": "64b0a7686c0d812c613690ce5019bfed",
".git/objects/90/dd3681c4b2bdec2f1686e7710f7b2446916ade": "41f91b4ad7f4e8a068e83eb6a0a9422a",
".git/objects/d3/91339949fb2719ee29995143ba361ca179a52c": "f2ebebf2882342c0eea4481b6035bae7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/2e0e85e29edc3b8608c851c10f90445903966b": "896eec7d02c483fee3504e33b5523770",
".git/objects/a9/17a3cc85a91ec4381b371f17c80f9389c80a50": "86a8da2c6f7794e5bfa0c173175e201c",
".git/objects/d5/5a384d9d289be6c38640745a3ca0e9d14566a9": "f3b1b1cbef152680d1eb82cf812e5281",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f0/e061362fd7d159b3deb86c7dbf0f0f9d6f5567": "fe133f530a3362684c87f2ad7005c580",
".git/objects/e8/0d54586244096e0a21316c271719d902d84129": "8aad7355ce99bf311c03e3df0171d293",
".git/objects/e9/17722d7badb671270fd65d61f4440ba9514f2b": "42811a1da94bf8410d316f16312e4d44",
".git/objects/e7/11a8d6efec8fdd1183b69d59f7991d2bd686f2": "c801096ebfa62d6c623c187ccfb7b9f3",
".git/objects/cb/9a8689cd390851a55b8c36f38fc969f98d3b1b": "a126c03443a49726b5b5e5ef6929f82a",
".git/objects/79/f90ff4655197cfad311cb7415915729fa614e9": "c6dd040a1036f09bfee3f9ad431910c1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/8d/b4c00612d8856accaf5e348160cee3817bed6d": "26c5e6d2cf358dd39d311a09e3b312c0",
".git/objects/12/203a3089371d427ac0939e3a3b41b8a5505bf7": "90b8d8a79656fa6b7fc16c431f8bc958",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/13/1590b059c8bc96c7243bf192811e837a5156bf": "7428f2ba320a75a8283a50c42d82fc8c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb44538795c9ff4f3d9fe1192cab83c1",
".git/logs/refs/heads/main": "5f2f784cf04add915f2b1347dc898e6e",
".git/logs/refs/remotes/origin/main": "fbda3326c4b1c32e7c5d9e22ace1724e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2ff747dff16912211d767411cb59992a",
".git/refs/remotes/origin/main": "2ff747dff16912211d767411cb59992a",
".git/index": "5c3f55271149d4374e4624c5192c4332",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "84c5984b63b9a17055ec5e5781be0c0d",
"assets/NOTICES": "eb60cff0fbd078d06933f4dae1779ff1",
"assets/FontManifest.json": "94ae6d757bf21d335fc9e94e9409d718",
"assets/AssetManifest.bin.json": "36662e456f1707e9cde7618b50a363d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6789bed5799bf280608461c1eb2bb5a7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/rose.png": "771c5ff315440951c8250b290e8f53e9",
"assets/assets/images/background.png": "506d5cd17a1ec007ab8ba30d90d5319a",
"assets/assets/fonts/FontMesa-MarlinSoftBasic-Regular.ttf": "cb79e143151201d4fcbecdce7f1b685c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
