import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const promiseOne = await signUpUser(firstName, lastName);
    const promiseTwo = await uploadPhoto(fileName);
    const result = [];
    promiseOne.then(() => result.push(promiseOne.state));
    promiseTwo.then(() => result.push(promiseTwo.state));

    return result;
  } catch (error) {
    // console.log('An error occurred', error);
    return ['rejected', 'rejected'];
  }
}
