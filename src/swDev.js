export default function swDev() {
  navigator.serviceWorker
    .register('/sw.js')
    .then((result) => {})
    .catch((e) => {
      console.log(e);
    });
}
