/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","7b8c8f3de5d40c53fef2df734e925379"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","9a2dffc0a23164bd05b64447dceef961"],["images/123.png","07c3732776810760c354ef7857cf7859"],["images/account_landing.png","5ae8bbf821527c4b94fc335445e264e1"],["images/and_its_a.png","58129655fac931ef8534ce04d69ebea4"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/beach.png","d5c97dfe4b53845cc35767b664419635"],["images/best_of.png","1cc22d043f59327ac5fcc52c0e2db493"],["images/big-six.png","72a662c9aca5f749b7551c030c3f52df"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/business_chart.png","86e63711740b1a6d4679987435d4d34c"],["images/business_form.png","13526b08fe7ea580933cc4f182dc410d"],["images/business_table.png","71e0e705c3ad4f9d23bc5abf3e041fdd"],["images/come.png","902312455f18487705d62aa023ffe688"],["images/compare.png","6467e0cc0968de8e0fa6f72d2de5e012"],["images/debit.png","0dbffadfb2441f5d25107ed76f19c4fc"],["images/definition.png","471b4d9e7525d80a4f8fc36916d41cd8"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/get_quote_button.png","59c2e6266b6ce1d53a3bf94fa65f53a1"],["images/green-error.png","14be5e8a3fd2be276475fac6fffa9d56"],["images/green_boxes.png","2fe0b4ab539906966cb32a13cb08c9f6"],["images/greening.png","ef23893514c867438bc47b218ce336c4"],["images/have-bill.png","66385854d27bd76d5d65f5bf2a53a4db"],["images/help-page.png","bc4a0f0ee4fa343dafb115e27f30b946"],["images/house.png","af6bd517f2f982348e74dc8b9d158656"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/join-features.png","f5d69ddad2a77620298caa336491d763"],["images/join1.png","6f91430b7de1cd15e39d6c6951bd6ff4"],["images/joinform.png","587843d0f1f52b30402ea80617dd56d4"],["images/joinquestion1.png","cd4309e0388ddfa91476720658d7b04c"],["images/joinquestion2.png","32dc3077df3946348855a7ed8303595f"],["images/joinquestion3.png","6c964f81b94d0cc651a952e1d68ee7ac"],["images/joinsidebar.png","5e6a90620db84a670e5419871e3ded82"],["images/landing_123.png","55c481abf74582ef0b6b20e98bd9ae89"],["images/landing_chart.png","6341f7a23284f700c8d70597861245a9"],["images/landing_footer.png","81a254874f49e277be991aac1a264a76"],["images/landing_navigation.png","b71ba29578d33ef6b89bc33048424055"],["images/listen.png","71a26fcfdc2a26e562606274d041713c"],["images/living-b.png","46010e255d430b41b74fa4920197a463"],["images/login.png","fc7cb9826d505cbdc2237aa980821cb3"],["images/logo.gif","d54c7c81a853579d050968c7bdd0f64f"],["images/logo.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/my-info-form.png","ad142000871d641aa4a0f62647ff1105"],["images/my_payment_details.png","fbc10924db05e1d29c067e6e369c0858"],["images/nav-dash.png","4b30e314bb46df4417cafed65e99d713"],["images/nav-marketing.png","7fb76d851080d509c1e3becbcd6be8e7"],["images/nav-quote.png","30badc5ef0337f93f219a662a429c0b6"],["images/navigation.png","37a2f8ff9ae3d5db1fa162d36d28c712"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/open_roles.png","341a819b84840839688831e6b014be4c"],["images/our_energy_chart.png","ae225b9ed55d3a843a132ace112799be"],["images/payment_sidebar.png","3c1b0283806ab6879c4036823bea66b4"],["images/payments_table.png","5219b87f7c5ddf44930dd47fdf3e9065"],["images/personal_info.png","8dbf6a64c2130538115b78e630c88eac"],["images/personal_list.png","f6e7e192aa4d7c424c1f796c1ebc823b"],["images/press.png","cbf59e54c1a2d2fd58bfe110ba81014c"],["images/reading.png","e702abffcfebfedea45363176670fd0e"],["images/red.png","0365c33721320f85ac23a1dc10ac5989"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/social.png","22031be79905458a3f60e1acae2a7212"],["images/social_big.png","15f8442d1d96e154a73620bc9eaabb4d"],["images/social_small.png","7a5051b498d7203978d0c2e503b15205"],["images/steps.png","104e2a5c453761a33a963e1f9a95e76e"],["images/switch_chart.png","391887be4a44fd3566e0391255277b63"],["images/switch_timeline.png","82d8463d96114968b0bf4b96cf69e2fe"],["images/tariff-error.png","fd67e59c7c3925bf5e6676bd8cd2035f"],["images/terms.png","f91308ae5bf973ae0cf67d047c28095c"],["images/usage_chart.png","8c6a451f228ad2b9ff1ec356e3b506c1"],["images/usage_table.png","174d2e3462afb85abfb3ec7ae3b5a903"],["images/working_at.png","f35bf877ac635498cbf2553dc182a33d"],["index.html","cd563b6ac5880bc5b9ee202a9656a628"],["index.xml","31639487ab4f3768feab3d0dbec1cef0"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","ed6b2e68df90c6679cc25eb6dc21909a"],["patterns/general/color-dependence/index.html","4937f989f04cb9dc129f0c4708bfd5de"],["patterns/general/focus-styles/index.html","8debabf27842a5fd4e6e679d94d1f54e"],["patterns/general/form-errors/index.html","a91c6eb8892413ee473717ee37c0cb6f"],["patterns/general/heading-structure/index.html","95f162a4ad700710bd2b7a30137e4edf"],["patterns/general/inconsistency/index.html","1607e80fc51806e284a04eeef53b3878"],["patterns/general/index.html","281d91b33cc6a7c2c91911cdd14d2adf"],["patterns/general/index.xml","cc796b02ce11cfa5a9560c9838aeb78d"],["patterns/general/list-structure/index.html","ed454835a946930e4b4e62ce883c8311"],["patterns/general/placeholder-labels/index.html","2fed4c5307676869857ac69978a954bf"],["patterns/general/routing/index.html","f41bb0329d424f624c7eeda99d671251"],["patterns/general/skip-links/index.html","c338ad89e67ae3289ef7b18d9e9708ac"],["patterns/general/textual-alternatives/index.html","7d8046707ed38faa38535943b7acf4d7"],["patterns/general/wording/index.html","19093db1fc54635071a02bc6977b470d"],["patterns/index.html","750504806c877834faed9fa3999924e3"],["patterns/index.xml","db97c99c8e2f390305f484e105b0262f"],["patterns/scope/index.html","921eb3fd9090c4661b72aac14d57861e"],["print-version/index.html","ab229375bec07178cbaa91c0a06bdcf1"],["priorities/1/index.html","e534bdec58f9dc9e26c9932a281dae6e"],["priorities/1/index.xml","94b9d6f74951d1eac4192acdeb17372b"],["priorities/2/index.html","074c25f007fb992d793477a2b366b400"],["priorities/2/index.xml","c9230ee2e02ffb6c3c7cc012e9f6bfdc"],["priorities/3/index.html","988dffe1c6cb4075ba99cc37e8c66fc6"],["priorities/3/index.xml","26f8bbdbc8af3933ef539247d574aed5"],["priorities/index.xml","c12e1474376e84e5fc8e605979c4cd11"],["sitemap.xml","cc4d9109f5be9c171305041f6c269af2"],["tags/index.xml","b4f4979fc4552849511cd4c28a847a0c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







