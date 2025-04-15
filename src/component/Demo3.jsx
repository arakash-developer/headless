import React, { useState } from 'react';

const Demo3 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = 'http://localhost/your-wordpress-site/wp-json/custom/v1/validate-token'; // Replace with your actual URL

    // Static custom token you want to send
    const customToken = 'custom_token_1';  // This is your static custom token

    // Send the GET request with the custom token in the Authorization header
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${customToken}`, // Send the static custom token here
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // If the token is valid, parse the response data
        } else {
          throw new Error('Invalid token or unauthorized access');
        }
      })
      .then(data => {
        setData(data); // Set the response data
      })
      .catch(error => {
        setError(error.message); // Handle errors (invalid token, unauthorized, etc.)
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch User Data</button>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Demo3;
