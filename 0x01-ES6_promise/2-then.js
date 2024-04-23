export default function handleResponseFromAPI(promise) {
  const resolvedObj = { status: 200, body: 'success' };
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(resolvedObj);
      console.log('Got a response from the API');
    } else {
      reject(new Error());
      console.log('Got a response from the API');
    }
  });
}
