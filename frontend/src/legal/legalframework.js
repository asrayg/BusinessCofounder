import React, { useState, useEffect } from 'react';
import './legalframework.css';
import Header from '../header&footer/header.js';

const LegalFramework = () => {
  const [legalText, setLegalText] = useState("Loading legal framework...");
  const fetchPitches = async () => {
    const businessData = localStorage.getItem('businessFormData'); // Fetch data from localStorage
    console.log('Fetched business data from localStorage:', businessData);

    if (businessData) {
      try {
        const response = await fetch('http://127.0.0.1:5000/legal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: businessData, // Send the business data to the API
        });
        console.log('API response status:', response.status);

        const data = await response.json(); // Get the API response as JSON
        console.log('Received data from API:', data);

      //FIXME: make it update the text, idk how x        
      } catch (error) {
        console.error('Error fetching pitches:', error);
      }
    } else {
      console.error('No business data found in localStorage');
    }
  };
  // Simulating API call for legal framework text
  useEffect(() => {
    // Placeholder for actual API call

    


    setTimeout(() => {
      setLegalText(`
        Legal Framework Setup:
        
        1. Company Structure: Choose the most suitable legal structure for your business, such as LLC, Corporation, or Sole Proprietorship.
        2. Compliance with Regulations: Ensure that you are compliant with local, state, and federal regulations, including licensing and permits.
        3. Intellectual Property: Protect your business name, logo, and other intellectual properties through trademarks, patents, and copyrights.
        4. Contracts and Agreements: Establish clear contracts for partnerships, employees, and suppliers to protect the business from disputes.
        5. Data Protection: Implement policies to protect customer data in line with GDPR, CCPA, or other relevant data protection laws.
        6. Liability and Insurance: Obtain the necessary insurance to cover liabilities and protect the business against unforeseen risks.
        
        Legal assistance can be sought to help navigate these areas and ensure that your business is set up with a strong legal foundation.
      `);
    }, 1000); // Simulating a delay for API response
  }, []);

  return (
    <div><Header />
      <div className="legal-framework-container">
        <h2>Legal Framework</h2>

        {/* Display the legal framework text */}
        <div className="legal-text">
          <p>{legalText}</p>
        </div>

        {/* Placeholder for future backend/API integration */}
        <button className="fetch-api-button">Fetch Updated Legal Info</button>
      </div>
    </div>
  );
};

export default LegalFramework;
