/**
 * Koda — oauth-authorize.js
 *
 * Fallback for https://koda.fyi/oauth/authorize?... on a device where
 * the Universal/App Link didn't open the installed app directly (not
 * installed, or the OS declined to hand off -- both look the same
 * from here). Re-attempts the koda:// custom scheme once, carrying the
 * original query string through unchanged, then after a short timeout
 * shows "Install Koda" instead of spinning forever. See the Flutter
 * app's lib/core/deep_links.dart (_oauthRequestFrom) for what consumes
 * this on the other side.
 */
(function () {
  'use strict';

  var waiting = document.getElementById('oauth-waiting');
  var fallback = document.getElementById('oauth-fallback');
  var retry = document.getElementById('oauth-retry');

  function kodaSchemeUrl() {
    return 'koda://oauth/authorize' + window.location.search;
  }

  function attemptOpen() {
    window.location.href = kodaSchemeUrl();
  }

  function showFallback() {
    if (waiting) waiting.hidden = true;
    if (fallback) fallback.hidden = false;
  }

  // If the app opens, this page is backgrounded/closed and the timer
  // below never fires in practice. If nothing intercepts the scheme
  // (not installed), this tab is still here 2.5s later.
  attemptOpen();
  window.setTimeout(showFallback, 2500);

  if (retry) {
    retry.addEventListener('click', function (e) {
      e.preventDefault();
      if (waiting) waiting.hidden = false;
      if (fallback) fallback.hidden = true;
      attemptOpen();
      window.setTimeout(showFallback, 2500);
    });
  }
})();
