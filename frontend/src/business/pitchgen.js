// import React, { useState } from 'react';
// import './pitchgen.css';
// import Header from '../header&footer/header.js';

// const PitchGenerator = () => {
//   const [pitches] = useState({
//     fifteenSecondPitch: 'Your 15-second pitch will appear here...',
//     ninetySecondPitch: 'Your 90-second pitch will appear here...',
//     fourMinutePitch: 'Your 4-minute pitch will appear here...',
//   });

//   const [suggestions, setSuggestions] = useState({
//     fifteenSecondSuggestion: '',
//     ninetySecondSuggestion: '',
//     fourMinuteSuggestion: '',
//   });

//   const handleSuggestionChange = (e) => {
//     const { name, value } = e.target;
//     setSuggestions({ ...suggestions, [name]: value });
//   };

//   const handleAISuggestion = (pitchType) => {
//     // Placeholder for AI API call
//     alert(`AI is generating suggestions for the ${pitchType}`);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="pitch-generator-container">

//         <div className="pitch-boxes">
//           {/* 15-Second Pitch */}
//           <div className="pitch-box">
//             <h3>15 Second Pitch</h3>
//             <p>{pitches.fifteenSecondPitch}</p>
//             <textarea
//               name="fifteenSecondSuggestion"
//               value={suggestions.fifteenSecondSuggestion}
//               onChange={handleSuggestionChange}
//               placeholder="Ask AI for edits..."
//             />
//             <button onClick={() => handleAISuggestion('15-second pitch')}>Ask AI for edits</button>
//           </div>

//           {/* 90-Second Pitch */}
//           <div className="pitch-box">
//             <h3>90 Second Pitch</h3>
//             <p>{pitches.ninetySecondPitch}</p>
//             <textarea
//               name="ninetySecondSuggestion"
//               value={suggestions.ninetySecondSuggestion}
//               onChange={handleSuggestionChange}
//               placeholder="Ask AI for edits..."
//             />
//             <button onClick={() => handleAISuggestion('90-second pitch')}>Ask AI for edits</button>
//           </div>

//           {/* 4-Minute Pitch */}
//           <div className="pitch-box">
//             <h3>4 Minute Pitch</h3>
//             <p>{pitches.fourMinutePitch}</p>
//             <textarea
//               name="fourMinuteSuggestion"
//               value={suggestions.fourMinuteSuggestion}
//               onChange={handleSuggestionChange}
//               placeholder="Ask AI for edits..."
//             />
//             <button onClick={() => handleAISuggestion('4-minute pitch')}>Ask AI for edits</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PitchGenerator;


import React, { useState, useEffect } from 'react';
import './pitchgen.css';
import Header from '../header&footer/header.js';

const PitchGenerator = () => {
  // State to hold the pitches from the API
  const [pitches, setPitches] = useState({
    fifteenSecondPitch: 'Your 15-second pitch will appear here...',
    ninetySecondPitch: 'Your 90-second pitch will appear here...',
    fourMinutePitch: 'Your 4-minute pitch will appear here...',
  });

  // State to hold suggestions for AI edits
  const [suggestions, setSuggestions] = useState({
    fifteenSecondSuggestion: '',
    ninetySecondSuggestion: '',
    fourMinuteSuggestion: '',
  });

  // Function to fetch the pitches from the backend using localStorage data
  const fetchPitches = async () => {
    const businessData = localStorage.getItem('businessFormData'); // Fetch data from localStorage
    console.log('Fetched business data from localStorage:', businessData);

    if (businessData) {
      try {
        const response = await fetch('http://127.0.0.1:5000/qPitch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: businessData, // Send the business data to the API
        });
        console.log('API response status:', response.status);

        const data = await response.json(); // Get the API response as JSON
        console.log('Received data from API:', data);

        // Parse the `content` array from the response and extract the text for each pitch
        if (data) {
          console.log('Extracted text from API:', data);
          console.log("---------------------------")
          console.log(data['4']['content'][0])

          // If the API returns multiple sections, split or segment them based on your needs
          setPitches({
            fifteenSecondPitch: data['15']['content'][0]['text'], // You can split or adjust the logic based on API response
            ninetySecondPitch: data['90']['content'][0]['text'], // Use different logic for 90 seconds if necessary
            fourMinutePitch: data['4']['content'][0]['text'], // Assuming this is a longer text segment
          });
        } else {
          console.warn('API returned unexpected structure:', data);
        }
      } catch (error) {
        console.error('Error fetching pitches:', error);
      }
    } else {
      console.error('No business data found in localStorage');
    }
  };

  // Function to handle changes in the suggestion text areas
  const handleSuggestionChange = (e) => {
    const { name, value } = e.target;
    setSuggestions({ ...suggestions, [name]: value });
  };

  // Placeholder function to handle AI suggestions
  const handleAISuggestion = (pitchType) => {
    alert(`AI is generating suggestions for the ${pitchType}`);
    // You can implement the AI suggestion logic later
  };

  // Fetch the pitches when the component mounts
  useEffect(() => {
    console.log('Fetching pitches...');
    fetchPitches();
  }, []);

  return (
    <div>
      <Header />
      <div className="pitch-generator-container">
        <div className="pitch-boxes">
          {/* 15-Second Pitch */}
          <div className="pitch-box">
            <h3>15 Second Pitch</h3>
            <p>{pitches.fifteenSecondPitch}</p>
            <textarea
              name="fifteenSecondSuggestion"
              value={suggestions.fifteenSecondSuggestion}
              onChange={handleSuggestionChange}
              placeholder="Ask AI for edits..."
            />
            <button onClick={() => handleAISuggestion('15-second pitch')}>Ask AI for edits</button>
          </div>

          {/* 90-Second Pitch */}
          <div className="pitch-box">
            <h3>90 Second Pitch</h3>
            <p>{pitches.ninetySecondPitch}</p>
            <textarea
              name="ninetySecondSuggestion"
              value={suggestions.ninetySecondSuggestion}
              onChange={handleSuggestionChange}
              placeholder="Ask AI for edits..."
            />
            <button onClick={() => handleAISuggestion('90-second pitch')}>Ask AI for edits</button>
          </div>

          {/* 4-Minute Pitch */}
          <div className="pitch-box">
            <h3>4 Minute Pitch</h3>
            <p>{pitches.fourMinutePitch}</p>
            <textarea
              name="fourMinuteSuggestion"
              value={suggestions.fourMinuteSuggestion}
              onChange={handleSuggestionChange}
              placeholder="Ask AI for edits..."
            />
            <button onClick={() => handleAISuggestion('4-minute pitch')}>Ask AI for edits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchGenerator;
