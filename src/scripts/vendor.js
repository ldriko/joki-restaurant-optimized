const prod = process.env.NODE_ENV === 'production';

if (navigator.serviceWorker && prod) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
