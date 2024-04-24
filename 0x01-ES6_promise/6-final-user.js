import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const promiseOne = await signUpUser(firstName, lastName);
    const promiseTwo = await uploadPhoto(fileName);
    const result = [];
    promiseOne.then((data) => (promiseOne.state === 'fulfilled' ? result.push({
      status: promiseOne.state,
      value: data,
    }) : result.push({
      status: promiseOne.state,
      value: new Error(''),
    })));
    promiseTwo.then((data) => (promiseTwo.state === 'fulfilled' ? result.push({
      status: promiseTwo.state,
      value: data,
    }) : result.push({
      status: promiseTwo.state,
      value: new Error(''),
    })));

    return result;
  } catch (error) {
    // console.log('An error occurred', error);
    return ['rejected', 'rejected'];
  }
}
