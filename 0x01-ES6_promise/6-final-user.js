import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [userResult, photoResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const handleSettledPromise = (result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    }
    return {
      status: result.status,
      value: `Error: ${result.reason.message}`,
    };
  };

  return [handleSettledPromise(userResult), handleSettledPromise(photoResult)];
}
