import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`Photo response: ${photoResponse}`);  // Use photoResponse here
      console.log(`Body: ${userResponse.firstName} ${userResponse.lastName}`);  // Access user properties correctly
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
