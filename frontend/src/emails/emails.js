import React, { useState } from "react";
import Header from '../header&footer/header.js';
import './emails.css';

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
    return data;  // Assuming the backend returns an object with text property
  } catch (error) {
    console.error('Error asking backend:', error);
    return { text: 'An error occurred while fetching the response.' }; // Error handling
  }
}

// Create a React component for the Email interface
function EmailGenerator() {
  const [userInput, setUserInput] = useState(''); // Input state
  const [response, setResponse] = useState(''); // State to store the backend response

  const handleUserInput = async () => {
    if (userInput) {
      const result = await askBackend(userInput);
      
      // Update the state with the backend response
      const responseText = result[0].text || 'No response received';
      setResponse(responseText); // Display response in a styled container
    }
  };

  return (
    <div className="email-generator-container">
      <Header />
      <div className="email-content">
        <h2>Generate Your Email</h2>
        <p>Input the email request or details you'd like generated, and the backend will provide the content.</p>

        {/* User Input Section */}
        <div className="email-input-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your email request"
            className="email-input"
          />
          <button onClick={handleUserInput} className="generate-email-button">Generate Email</button>
        </div>

        {/* Display Response */}
        <div id="response-container" className="response-container">
          <h3>Email Response:</h3>
          <p>{response}</p> {/* Display the response here */}
        </div>
      </div>
    </div>
  );
}

export default EmailGenerator;
