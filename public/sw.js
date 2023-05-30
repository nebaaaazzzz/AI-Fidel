const CACHE_NAME = 'Fidel_V2';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheName.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            // Update the cache with the new response
            cache.put(event.request, response.clone());
          }
          return response;
        })
        .catch(() => {
          // If the fetch fails, try to return a cached response
          return cache.match(event.request);
        });
    })
  );
});

// const cacheName = 'Fidel_V1';

// self.addEventListener('install', (e) => {});

// // Call Activate Event
// self.addEventListener('activate', (e) => {
//   e.waitUntil(
//     caches.keys().then((cacheName) => {
//       return Promise.all(
//         cacheName.map((cache) => {
//           if (cache !== cacheName) {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         // Make copy/clone of response
//         const resClone = res.clone();

//         caches.open(cacheName).then((cache) => {
//           // Add response to cache
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch((err) => caches.match(e.request).then((res) => res))
//   );
// });
