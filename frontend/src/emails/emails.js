// import React, { useState, useEffect } from "react";
// import Header from '../header&footer/header.js';

// // Function to handle sending a request to the Flask backend
// async function askBackend(message) {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/makeemail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ "text": message })
//     });
//     const data = await response.json();
//     console.log('Response from backend:', data);
//     return data;
//   } catch (error) {
//     console.error('Error asking backend:', error);
//     return 'An error occurred while fetching the response.';
//   }
// }

// // Create a React component for the Email interface
// function Email() {
//   const [userInput, setUserInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleUserInput = async () => {
//     if (userInput) {
//       const result = await askBackend(userInput);
//       setResponse(result);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <h1>Ask the Backend</h1>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           placeholder="Enter your question"
//         />
//         <button onClick={handleUserInput}>Ask</button>
//         <div>{response}</div>
//       </div>
//     </div>
//   );
// }

// export default Email;


import React, { useState } from "react";
import Header from '../header&footer/header.js';

// Function to handle sending a request to the Flask backend
async function askBackend(message) {
  try {
    const response = await fetch('http://127.0.0.1:5000/makeemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "text": message })
    });
    const data = await response.json();
    console.log('Response from backend:', data);
    return data;  // Assuming the backend returns an object, e.g., { "text": "Some response" }
  } catch (error) {
    console.error('Error asking backend:', error);
    return { text: 'An error occurred while fetching the response.' }; // Return an object with text
  }
}

// Create a React component for the Email interface
function Email() {
  const [userInput, setUserInput] = useState(''); // Just keeping track of input, no response state needed.

  const handleUserInput = async () => {
    if (userInput) {
      const result = await askBackend(userInput);
      
      // Directly manipulate the DOM to paste the response on the page
      const responseText = result[0].text || 'No response received';
      document.getElementById('response-container').innerText = responseText; // Display the text in a specific div
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Ask the Backend</h1>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your question"
        />
        <button onClick={handleUserInput}>Ask</button>

        {/* Display the response somewhere on the page */}
        <div id="response-container" style={{ marginTop: '20px', fontSize: '18px', color: 'blue' }}>
          {/* The response from the backend will be inserted here */}
        </div>
      </div>
    </div>
  );
}

export default Email;
