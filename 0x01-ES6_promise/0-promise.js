export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('API response received successfully');
    } else {
      reject(new Error('Failed to fetch API response'));
    }
  });
}
