import React, { useState } from 'react';
// import jsPDF from 'jspdf';
import './prospectus.css';
import Header from '../header&footer/header.js';

const Prospectus = () => {
  const [suggestion, setSuggestion] = useState("");

  const prospectusText = `
    The Brik aims to address the prevalent issue of disorganization and frustration caused by frequently misplaced daily essentials...
    (Put your entire prospectus text here or fetch from an API)
    The Brik aims to address the prevalent issue of disorganization and frustration caused by frequently misplaced daily essentials...
    (Put your entire prospectus text here or fetch from an API)
    The Brik aims to address the prevalent issue of disorganization and frustration caused by frequently misplaced daily essentials...
    (Put your entire prospectus text here or fetch from an API)
  `;

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleAISuggestion = () => {
    // Placeholder for AI API suggestion
    alert('AI is generating suggestions based on your input');
    // Call AI API here with the suggestion
  };

  const exportToPDF = () => {
    // const doc = new jsPDF();
    // doc.text(prospectusText, 10, 10); // Add the prospectus text to the PDF
    // doc.save('prospectus.pdf'); // Save the PDF with a default name
  };

  return (
    <div>
      <Header />
    <div className="prospectus-container">

      {/* Display Prospectus Text */}
      <div className="prospectus-text">
        <p>{prospectusText}</p>
      </div>


      {/* Suggestion Box */}
      <div className="suggestion-box">
        <textarea
          name="suggestion"
          value={suggestion}
          onChange={handleSuggestionChange}
          placeholder="Ask the AI for suggestions..."
        />
        <button onClick={handleAISuggestion}>Ask AI for Suggestions</button>
      </div>

            {/* Button to Export Text to PDF */}
            <button onClick={exportToPDF} className="export-button">Export to PDF</button>

    </div>
    </div>
  );
};

export default Prospectus;
