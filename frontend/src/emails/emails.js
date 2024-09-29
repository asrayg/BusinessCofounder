// import React from 'react';
// import Header from '../header&footer/header.js';

// emails.js

// Function to create and append HTML elements
function createEmailInterface() {
  const container = document.createElement('div');
  container.innerHTML = `
      <h1>Ask the Backend</h1>
      <input type="text" id="userInput" placeholder="Enter your question">
      <button id="askButton">Ask</button>
      <div id="response"></div>
  `;
  document.body.appendChild(container);
}

// Function to handle sending a request to the Flask backend
async function askBackend(message) {
  console.log("?????????????????????????????????????????")
  try {
      const response = await fetch('http://127.0.0.1:5000/makeemail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "text" : "text hwre" })
      });
      console.log(response)
      const data = await response.json();
      console.log('Response from backend:', data);
      return data;
  } catch (error) {
      console.error('Error asking backend:', error);
      return 'An error occurred while fetching the response.';
  }
}

// Function to handle user input and display response
function handleUserInput() {
  const userMessage = document.getElementById('userInput').value;
  if (userMessage) {
      askBackend(userMessage).then(response => {
          document.getElementById('response').textContent = response;
      });
  }
}

// Initialize the interface and add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createEmailInterface();
  const askButton = document.getElementById('askButton');
  askButton.addEventListener('click', handleUserInput);
});

export default Email;