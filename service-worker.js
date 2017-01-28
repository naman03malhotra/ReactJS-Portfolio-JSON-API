var cacheName = 'letsconnect';
var filesToCache = [
'/',
'/404.html',
'/assets/css/ultimate.min.css',
'/assets/css/ultimate.css',
'/assets/js/sine.js',
'/assets/js/wow.min.js',
'/assets/img/1.jpg',
'/assets/img/nm.jpg',
'/assets/img/courses/cou.png',
'/assets/img/courses/cur.png',
'/assets/img/courses/edx.png',
'/assets/img/courses/har.gif',
'/assets/img/courses/mit.png',
'/assets/img/courses/mon.png',
'/assets/img/courses/sta.jpg',
'/assets/img/courses/te1.jpg',
'/assets/img/courses/tec.png',
'/assets/img/icon/n1.png',
'/assets/img/icon/n2.png',
'/assets/img/projects/brk.jpg',
'/assets/img/projects/cs50.png',
'/assets/img/projects/des.jpg',
'/assets/img/projects/gen.jpg',
'/assets/img/projects/gra.jpg',
'/assets/img/projects/img.jpg',
'/assets/img/projects/int.png',
'/assets/img/projects/mail.jpg',
'/assets/img/projects/p2p.jpg',
'/assets/img/projects/por.jpg',
'/assets/img/projects/read.jpg',
'/assets/img/projects/sen.png',
'/assets/img/projects/shu.jpg',
'/assets/img/projects/son.jpg',
'/assets/img/projects/text.jpg',
'/assets/img/projects/ui.jpg',
'/assets/img/work/ata.jpg',
'/assets/img/work/cas.jpg',
'/assets/img/work/eba.jpg',
'/assets/img/work/ece.jpg',
'/assets/img/work/eco.jpg',
'/assets/img/work/let.jpg',
'/assets/img/work/mit.jpg',
'/assets/img/work/myi.jpg',
'/assets/img/work/son.jpg',
'/assets/img/work/vaa.jpg',
'/assets/dwl/NamanMalhotra.pdf',
'/assets/particles.json',
'/bundle.min.js'

];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});