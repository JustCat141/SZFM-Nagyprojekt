export const LoadForFill = (id) => {
  const apiUrl = 'https://large-project-a6e2e-default-rtdb.europe-west1.firebasedatabase.app/dummy_data.json';

  // Return a Promise that resolves to the fetched data
  return fetch(apiUrl)
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (response.status === 200) {
        // Parse the response body as JSON and return it
        return response.json();
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
