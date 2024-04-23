export default function handleResponseFromAPI(promise) {
  const resolvedObj = { status: 200, body: 'success' };
  const error = new Error();
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(resolvedObj);
    } else {
      reject(error);
    }
  });
}

handleResponseFromAPI()
  .then(() => {
    console.log('Got a reponse from the API');
  })
  .catch(() => {
    console.log('Got a response from the API');
  });
