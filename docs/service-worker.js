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

var precacheConfig = [["404.html","56c4f60fd57ac415b1caa58db1ca1e49"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","fa4d0c82a6e480aecc189bf5d87fa267"],["images/123.png","07c3732776810760c354ef7857cf7859"],["images/account_landing.png","5ae8bbf821527c4b94fc335445e264e1"],["images/and_its_a.png","58129655fac931ef8534ce04d69ebea4"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/beach.png","d5c97dfe4b53845cc35767b664419635"],["images/best_of.png","1cc22d043f59327ac5fcc52c0e2db493"],["images/big-six.png","72a662c9aca5f749b7551c030c3f52df"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/business_chart.png","86e63711740b1a6d4679987435d4d34c"],["images/business_form.png","13526b08fe7ea580933cc4f182dc410d"],["images/business_table.png","71e0e705c3ad4f9d23bc5abf3e041fdd"],["images/come.png","902312455f18487705d62aa023ffe688"],["images/compare.png","6467e0cc0968de8e0fa6f72d2de5e012"],["images/debit.png","0dbffadfb2441f5d25107ed76f19c4fc"],["images/definition.png","471b4d9e7525d80a4f8fc36916d41cd8"],["images/dob.png","7f2c0bfb79c79d99354ee7615e49cf0d"],["images/dropdown.png","8d2426d665c8eb7372d0aa2e6fe05362"],["images/email-correct.png","3aade58ffde2b310b46e81685fa7c851"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/form-process.svg","9971ad587dce3e58d40ade48116f4990"],["images/form_group_error.png","a890d71357dcd00c38f2d810477975e4"],["images/general-error.png","97b7c5080dd92dc597aac60f3d57930e"],["images/get_quote_button.png","59c2e6266b6ce1d53a3bf94fa65f53a1"],["images/green-error.png","14be5e8a3fd2be276475fac6fffa9d56"],["images/green_boxes.png","2fe0b4ab539906966cb32a13cb08c9f6"],["images/greening.png","ef23893514c867438bc47b218ce336c4"],["images/ham.png","264d6d5f07687cfe5ccc1f91e5f7b800"],["images/have-bill.png","66385854d27bd76d5d65f5bf2a53a4db"],["images/help-page.png","bc4a0f0ee4fa343dafb115e27f30b946"],["images/house.png","af6bd517f2f982348e74dc8b9d158656"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/in-page.png","67161d52ec7d488300e59a0c1410d480"],["images/join-features.png","f5d69ddad2a77620298caa336491d763"],["images/join1.png","6f91430b7de1cd15e39d6c6951bd6ff4"],["images/joinform.png","587843d0f1f52b30402ea80617dd56d4"],["images/joinquestion1.png","cd4309e0388ddfa91476720658d7b04c"],["images/joinquestion2.png","32dc3077df3946348855a7ed8303595f"],["images/joinquestion3.png","6c964f81b94d0cc651a952e1d68ee7ac"],["images/joinsidebar.png","5e6a90620db84a670e5419871e3ded82"],["images/landing_123.png","55c481abf74582ef0b6b20e98bd9ae89"],["images/landing_chart.png","6341f7a23284f700c8d70597861245a9"],["images/landing_footer.png","81a254874f49e277be991aac1a264a76"],["images/landing_navigation.png","b71ba29578d33ef6b89bc33048424055"],["images/listen.png","71a26fcfdc2a26e562606274d041713c"],["images/living-b.png","46010e255d430b41b74fa4920197a463"],["images/login.png","fc7cb9826d505cbdc2237aa980821cb3"],["images/logo.gif","d54c7c81a853579d050968c7bdd0f64f"],["images/logo.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/my-info-form.png","ad142000871d641aa4a0f62647ff1105"],["images/my_payment_details.png","fbc10924db05e1d29c067e6e369c0858"],["images/nav-dash.png","4b30e314bb46df4417cafed65e99d713"],["images/nav-marketing.png","7fb76d851080d509c1e3becbcd6be8e7"],["images/nav-quote.png","30badc5ef0337f93f219a662a429c0b6"],["images/navigation.png","37a2f8ff9ae3d5db1fa162d36d28c712"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/open_roles.png","341a819b84840839688831e6b014be4c"],["images/our_energy_chart.png","ae225b9ed55d3a843a132ace112799be"],["images/pay-set-check.png","469c0d3151a5012732893ce3f302c720"],["images/pay-set-confirm.png","16ee27f55c18847ad40ad4ffa4e836b0"],["images/pay-set-debit-text.png","1a41032091e439bc1c50abebc0dc1451"],["images/pay-set-def-list.png","d2f9137dda96e3454264144522afb194"],["images/pay-set-headings.png","7707e5ba4762dd4da80d8a727701165d"],["images/payment_sidebar.png","3c1b0283806ab6879c4036823bea66b4"],["images/payments_table.png","5219b87f7c5ddf44930dd47fdf3e9065"],["images/personal_info.png","8dbf6a64c2130538115b78e630c88eac"],["images/personal_list.png","f6e7e192aa4d7c424c1f796c1ebc823b"],["images/positive_val.png","4e9318e6fa838c0f4c85bb5851cd27ea"],["images/press.png","cbf59e54c1a2d2fd58bfe110ba81014c"],["images/radios.png","0c79a4ffacd9851157b53c186d1d04f2"],["images/reading.png","e702abffcfebfedea45363176670fd0e"],["images/red.png","0365c33721320f85ac23a1dc10ac5989"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/show.png","f3095aaf89f06fa383df7f74f00976ec"],["images/social.png","22031be79905458a3f60e1acae2a7212"],["images/social_big.png","15f8442d1d96e154a73620bc9eaabb4d"],["images/social_small.png","7a5051b498d7203978d0c2e503b15205"],["images/stepper.png","861b31fb60b3c3b94c83f17ee7fbeef5"],["images/steps.png","104e2a5c453761a33a963e1f9a95e76e"],["images/switch-now.png","e3264b26b4a131304f850225feb6aa1d"],["images/switch_chart.png","391887be4a44fd3566e0391255277b63"],["images/switch_timeline.png","82d8463d96114968b0bf4b96cf69e2fe"],["images/tariff-dialog.png","bc140d496310e3dc2cf402dcacec3f14"],["images/tariff-error.png","fd67e59c7c3925bf5e6676bd8cd2035f"],["images/tariff-info.png","5660281fb2407b25a9e54e63a2a94c6d"],["images/terms.png","f91308ae5bf973ae0cf67d047c28095c"],["images/trust.png","c0a221e2694defa5cf39b6f9f843e6dd"],["images/usage.png","562585b1fadfcb89c90535b15899dd09"],["images/usage_chart.png","8c6a451f228ad2b9ff1ec356e3b506c1"],["images/usage_table.png","174d2e3462afb85abfb3ec7ae3b5a903"],["images/working_at.png","f35bf877ac635498cbf2553dc182a33d"],["index.html","f79431a42d5e5768528e3845236ffb1e"],["index.xml","bbad533de2b68995ca48e572424564f3"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","ed6b2e68df90c6679cc25eb6dc21909a"],["patterns/components/about-navigation/index.html","a4c3f9a266680e1a44411f288f32c9e4"],["patterns/components/answer-choices/index.html","699021838dacae6be4bdad941222b99b"],["patterns/components/bedroom-stepper/index.html","5cbe712b73bee61ac6a29f74ed97d40e"],["patterns/components/collapsible-sections/index.html","875f08b28f034c836701c543407ac3f0"],["patterns/components/dialogs/index.html","085446ab691d1dfa290ffa30694532e4"],["patterns/components/index.html","df7af0ccf152ca975a63060e0dbf208a"],["patterns/components/index.xml","332bd314405887d2201e10b029b446fa"],["patterns/components/menu-button/index.html","15b06ad45a2d78971e90c9a9703f9d11"],["patterns/components/show-password/index.html","60ee26aa303d3f5a5a6a0e08ce3cd6b3"],["patterns/components/usage-chart/index.html","9ba8a70b2cc4b24b28070cc85444ea32"],["patterns/general/color-dependence/index.html","0f7d607511c802e7bad2ffb20a06fbaf"],["patterns/general/elements-cannot-be-focused/index.html","ef3ccafe2ecfdf93f4f07c91e079e499"],["patterns/general/focus-styles/index.html","114fcbde64490bdfe34236d1c06310ab"],["patterns/general/form-errors/index.html","99929c2c8389981c67ecca67ad6faba2"],["patterns/general/heading-structure/index.html","2c7b9c43799430d2bb0d67f5d109dde3"],["patterns/general/inconsistency/index.html","fea007b8ef1f9ed2126d29c84ba40004"],["patterns/general/index.html","e03d045755fe3bc7625ac25e3ccfa65a"],["patterns/general/index.xml","f2088958d936b62dfc7793282249e87e"],["patterns/general/list-structure/index.html","e9c405a3ccf74d6386eb5872c81e88be"],["patterns/general/payment-settings/index.html","572bf53d9f61271fa121d1bd157f82a2"],["patterns/general/placeholder-labels/index.html","a8539977dbbd8638595075d576c385e5"],["patterns/general/routing/index.html","1e5b33f282427cf40a29d879dc08e4f6"],["patterns/general/skip-links/index.html","521c7b4a3a97c8129f112e2582433688"],["patterns/general/textual-alternatives/index.html","60f8bd2a87f0356f6c176d8ace01b259"],["patterns/general/wording/index.html","7dc716b2e11b94946a88dcbcfa61c6b3"],["patterns/index.html","2ba5869fc664ce15783137784c02fce2"],["patterns/index.xml","073ad5c789b64e00a29d15b0660faadb"],["patterns/resources/component-checklist/index.html","2823a5cdc364c0ba0e93eb02faa80413"],["patterns/resources/form-validation/index.html","af21c6e58fa39b5079e891e6ee91e14a"],["patterns/resources/homepage-template/index.html","555e47a8e500a30ecd5220d445f967cd"],["patterns/resources/index.html","56f92d1a311a96f1811fdcfb93d79a25"],["patterns/resources/index.xml","14b4511382f05673f100d9fb3072abc6"],["patterns/resources/level-prop/index.html","26d6694d045f4d7b9e5bd3f00ff36a0e"],["patterns/resources/manual-testing/index.html","648ee884c532057929d7e944d132c509"],["patterns/resources/navigation-markup/index.html","6e83dcda7c5666feddd5a904aa6d9ffa"],["patterns/resources/visually-hidden/index.html","2014e7ddc1a449ce8f46bbd9e2792c66"],["patterns/scope/index.html","2f81231d1ccaf27225a30306b55e5e40"],["print-version/index.html","e491324f3f57358d3ff69dda266c98f6"],["priorities/1/index.html","bd09900cf3218ea12a68bef26242befe"],["priorities/1/index.xml","f67dd6faec6c59d0e3c2cdf8071f532f"],["priorities/2/index.html","106a48a2a546ba1e60889c8e2b1ff425"],["priorities/2/index.xml","74410b1087e208e92d9f3cfe194cc1a9"],["priorities/3/index.html","125d74555b9b5cba40d895143a501984"],["priorities/3/index.xml","87e71471d3e1f5bd8a2cf740368d5a95"],["priorities/index.xml","8a2c4b6712ee1e6156108994c1468e45"],["sitemap.xml","795a8a405fd6fbac9f69e953d5473171"],["tags/index.xml","ef7676dbefe69b43a9e5e08b42499316"]];
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







