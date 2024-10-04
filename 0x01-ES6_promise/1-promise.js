export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success', // Added trailing comma here
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

getFullResponseFromAPI(true)
  .then((response) => console.log(response)) // Added parentheses around parameter
  .catch((error) => console.log(error.message)); // Added parentheses around parameter

getFullResponseFromAPI(false)
  .then((response) => console.log(response)) // Added parentheses around parameter
  .catch((error) => console.log(error.message)); // Added parentheses around parameter
