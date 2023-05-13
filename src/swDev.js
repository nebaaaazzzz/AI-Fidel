export default function swDev() {
  navigator.serviceWorker.register('/sw.js').then((result) => {
    console.log('result', result);
  });
}
