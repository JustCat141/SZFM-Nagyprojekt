export const LoadForFill = (id) => {
  const apiUrl = 'https://large-project-a6e2e-default-rtdb.europe-west1.firebasedatabase.app/dummy_data.json';

  return fetch(apiUrl)
    .then((response) => {
      console.log(response);
      return response; // Return the full response
    })
    .catch((error) => {
      console.error('Error:', error);
      throw new Error('Failed to fetch data');
    });
};