export const LoadForLogin = (id) => {
    const apiUrl = 'https://large-project-a6e2e-default-rtdb.europe-west1.firebasedatabase.app/question_list.json';
  
    // Return a Promise that resolves to the fetched data
    return fetch(apiUrl)
      .then((response) => {
        return response; // Return the full response
      })
      .catch((error) => {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
      });
  };