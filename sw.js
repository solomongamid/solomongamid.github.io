‘use strict’;
importScripts(‘sw-toolbox.js’); 
toolbox.precache([“index.html”,”mystyle.css”]); 
toolbox.router.get(‘/ *’, toolbox.cacheFirst); 
toolbox.router.get(‘/ *’, toolbox.networkFirst, { networkTimeoutSeconds: 5});