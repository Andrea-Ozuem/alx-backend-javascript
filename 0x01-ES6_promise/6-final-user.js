import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create Promises for signUpUser and uploadPhoto
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
