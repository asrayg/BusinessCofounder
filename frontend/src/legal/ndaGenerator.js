import React, { useState } from 'react';
import './ndaGenerator.css';
import Header from '../header&footer/header.js';


const NDAGenerator = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    partyOne: '',
    partyTwo: '',
    effectiveDate: '',
    confidentialInformation: '',
    jurisdiction: '',
  });

  const [ndaText, setNdaText] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Simulate NDA generation (replace with backend call later)
  const generateNDA = () => {
    const { partyOne, partyTwo, effectiveDate, confidentialInformation, jurisdiction } = formData;
    const generatedNda = `
      NON-DISCLOSURE AGREEMENT

      This Non-Disclosure Agreement ("Agreement") is entered into between ${partyOne} and ${partyTwo}, collectively referred to as "Parties," as of the effective date of ${effectiveDate}.

      The Parties agree as follows:

      1. Confidential Information:
      ${confidentialInformation}

      2. Obligations of the Parties:
      Both Parties agree to maintain the confidentiality of the information disclosed under this Agreement and not to disclose it to any third parties without prior written consent.

      3. Term:
      This Agreement shall remain in effect for a period of 2 years from the effective date.

      4. Jurisdiction:
      This Agreement shall be governed by the laws of ${jurisdiction}.

      IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date set forth above.
    `;
    setNdaText(generatedNda);
  };

  return (
    <div className="nda-generator-container">
      {/* Input Form */}
      <div className="nda-form">
        <div className="form-group">
          <label>Party One:</label>
          <input
            type="text"
            name="partyOne"
            value={formData.partyOne}
            onChange={handleChange}
            placeholder="Enter Party One"
          />
        </div>
        <div className="form-group">
          <label>Party Two:</label>
          <input
            type="text"
            name="partyTwo"
            value={formData.partyTwo}
            onChange={handleChange}
            placeholder="Enter Party Two"
          />
        </div>
        <div className="form-group">
          <label>Effective Date:</label>
          <input
            type="date"
            name="effectiveDate"
            value={formData.effectiveDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confidential Information:</label>
          <textarea
            name="confidentialInformation"
            value={formData.confidentialInformation}
            onChange={handleChange}
            placeholder="Describe the confidential information"
          />
        </div>
        <div className="form-group">
          <label>Jurisdiction:</label>
          <input
            type="text"
            name="jurisdiction"
            value={formData.jurisdiction}
            onChange={handleChange}
            placeholder="Enter Jurisdiction (e.g., California)"
          />
        </div>

        <button onClick={generateNDA} className="generate-nda-button">Generate NDA</button>
      </div>

      {/* Display Generated NDA */}
      {ndaText && (
        <div className="nda-result">
          <h3>Generated NDA</h3>
          <pre>{ndaText}</pre>
        </div>
      )}
    </div>
  );
};

export default NDAGenerator;
