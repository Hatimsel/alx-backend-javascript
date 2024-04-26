import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      console.log(`${results[0].value.body} ${results[1].value.firstName} ${results[1].value.lastName}`);
    }).catch(() => console.log('Signup system offline'));
}
