import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.allSettled([uploadPhoto(), createUser()]);

    const photo = photoResponse.status === 'fulfilled' ? photoResponse.value : null;
    const user = userResponse.status === 'fulfilled' ? userResponse.value : null;

    return { photo, user };
  } catch (error) {
    console.error('Signup system offline');
    return {};
  }
}
