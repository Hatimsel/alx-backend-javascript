export default function getResponseFromAPI() {
  const resolved = true;
  const newPromise = new Promise((resolve, reject) => {
    if (resolved) {
      resolve('Succes');
    } else {
      reject(new Error('Failed'));
    }
  });
  return newPromise;
}
