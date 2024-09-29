// import React, { useState, useEffect } from 'react';
// import './prospectus.css';
// import Header from '../header&footer/header.js';

// const Prospectus = () => {
//   const [prospectusContent, setProspectusContent] = useState([]);
//   const [suggestion, setSuggestion] = useState("");

//   // Function to fetch the prospectus from the API
//   const fetchProspectus = async () => {
//     const businessData = localStorage.getItem('businessFormData'); // Fetch data from localStorage
//     console.log('Fetched business data from localStorage:', businessData);

//     if (businessData) {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/pros', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: businessData, // Send the business data to the API
//         });

//         const data = await response.json(); // Get the API response as JSON
//         console.log('Received prospectus from API:', data);

//         // Set the prospectus content from the API response
//         const content = data.content[0]?.text || 'Error: Could not generate prospectus.';
//         setProspectusContent(content.split('\n')); // Split by new lines for formatting
//       } catch (error) {
//         console.error('Error fetching prospectus:', error);
//         setProspectusContent(['Error: Could not generate prospectus.']);
//       }
//     } else {
//       console.error('No business data found in localStorage');
//       setProspectusContent(['Error: No business data found.']);
//     }
//   };

//   useEffect(() => {
//     fetchProspectus(); // Fetch the prospectus when the component mounts
//   }, []);

//   const handleSuggestionChange = (e) => {
//     setSuggestion(e.target.value);
//   };

//   const handleAISuggestion = () => {
//     alert('AI is generating suggestions based on your input');
//   };

//   const exportToPDF = () => {
//     alert('PDF generation will be added.');
//   };

//   return (
//     <div>
//       <Header />
//       <div className="prospectus-container">
//         {/* Display Formatted Prospectus Text */}
//         <div className="prospectus-text">
//           {prospectusContent.map((line, index) => {
//             // Format headings and bullet points if needed
//             if (line.startsWith('HealthMate') || line.startsWith('Company Overview') || line.startsWith('The Problem') || line.startsWith('Our Solution') || line.startsWith('Market Opportunity') || line.startsWith('Our Competitive Advantage') || line.startsWith('Revenue Model') || line.startsWith('Traction') || line.startsWith('The Team') || line.startsWith('Financial Highlights') || line.startsWith('The Future')) {
//               return <h3 key={index}>{line}</h3>;
//             } else if (line.startsWith('- ')) {
//               return <ul key={index}><li>{line.slice(2)}</li></ul>;
//             } else if (line.trim() === '') {
//               return <br key={index} />;
//             } else {
//               return <p key={index}>{line}</p>;
//             }
//           })}
//         </div>

//         {/* Suggestion Box */}
//         <div className="suggestion-box">
//           <textarea
//             name="suggestion"
//             value={suggestion}
//             onChange={handleSuggestionChange}
//             placeholder="Ask the AI for suggestions..."
//           />
//           <button onClick={handleAISuggestion}>Ask AI for Suggestions</button>
//         </div>

//         {/* Button to Export Text to PDF */}
//         <button onClick={exportToPDF} className="export-button">Export to PDF</button>

//       </div>
//     </div>
//   );
// };

// export default Prospectus;


import React, { useState, useEffect } from 'react';
import './prospectus.css';
import Header from '../header&footer/header.js';

const Prospectus = () => {
  // Initialize with placeholder text while waiting for the API response
  const [prospectusContent, setProspectusContent] = useState(['Waiting for API retrieval...']);
  const [suggestion, setSuggestion] = useState("");

  // Function to fetch the prospectus from the API
  const fetchProspectus = async () => {
    const businessData = localStorage.getItem('businessFormData'); // Fetch data from localStorage
    console.log('Fetched business data from localStorage:', businessData);

    if (businessData) {
      try {
        const response = await fetch('http://127.0.0.1:5000/pros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: businessData, // Send the business data to the API
        });

        const data = await response.json(); // Get the API response as JSON
        console.log('Received prospectus from API:', data);

        // Set the prospectus content from the API response
        const content = data.content[0]?.text || 'Error: Could not generate prospectus.';
        setProspectusContent(content.split('\n')); // Split by new lines for formatting
      } catch (error) {
        console.error('Error fetching prospectus:', error);
        setProspectusContent(['Error: Could not generate prospectus.']);
      }
    } else {
      console.error('No business data found in localStorage');
      setProspectusContent(['Error: No business data found.']);
    }
  };

  useEffect(() => {
    fetchProspectus(); // Fetch the prospectus when the component mounts
  }, []);

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleAISuggestion = () => {
    alert('AI is generating suggestions based on your input');
  };

  const exportToPDF = () => {
    alert('PDF generation will be added.');
  };

  return (
    <div>
      <Header />
      <div className="prospectus-container">
        {/* Display Formatted Prospectus Text */}
        <div className="prospectus-text">
          {prospectusContent.map((line, index) => {
            // Format headings and bullet points if needed
            if (line.startsWith('HealthMate') || line.startsWith('Company Overview') || line.startsWith('The Problem') || line.startsWith('Our Solution') || line.startsWith('Market Opportunity') || line.startsWith('Our Competitive Advantage') || line.startsWith('Revenue Model') || line.startsWith('Traction') || line.startsWith('The Team') || line.startsWith('Financial Highlights') || line.startsWith('The Future')) {
              return <h3 key={index}>{line}</h3>;
            } else if (line.startsWith('- ')) {
              return <ul key={index}><li>{line.slice(2)}</li></ul>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>

        {/* Suggestion Box */}
        <div className="suggestion-box">
          <textarea
            name="suggestion"
            value={suggestion}
            onChange={handleSuggestionChange}
            placeholder="Ask the AI for suggestions... 
            
            
            
            "
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
