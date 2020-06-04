const staticAssets = [
    "./",
    "./js/",
    "./css/estilo.css",
    "./img/"

  
];

self.addEventListener('install', async event => {
    console.log('install');
    const cache = await caches.open('manuales-static');
    cache.addAll(staticAssets);

});


self.addEventListener('fetch', event => {
    console.log('fetch');
    const req = event.request;
    const url = new URL (req.url);

    if (url.origin == location.origin){
        event.respondWith(cacheFirst(req));
    }else{
    event.respondWith(networkFirst(req));
    }
});

async function cacheFirst (req){
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst (req) {
    const cache = await caches.open('manuales-dynamic');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    }catch{
        return await cache.match(req);
    }
}