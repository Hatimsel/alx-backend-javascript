export default function getFullResponseFromAPI(success) {
  const resolvedObj = { status: 200, body: 'Success' };
  const rejectedObj = new Error('The fake API is not working currently');
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(resolvedObj);
    } else {
      reject(rejectedObj);
    }
  });
}
