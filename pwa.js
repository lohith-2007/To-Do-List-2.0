// Registers the service worker (relative path, so it works under /repo-name/ on GitHub Pages)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').catch(function () {});
  });
}
