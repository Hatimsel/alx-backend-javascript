import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoProfile, userInfos] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoProfile.body} ${userInfos.firstName} ${userInfos.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
