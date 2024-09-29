import React, { useState } from 'react';
import './pitchgen.css';
import Header from '../header&footer/header.js';

const PitchGenerator = () => {
  const [pitches] = useState({
    fifteenSecondPitch: 'Your 15-second pitch will appear here...',
    ninetySecondPitch: 'Your 90-second pitch will appear here...',
    fourMinutePitch: 'Your 4-minute pitch will appear here...',
  });

  const [suggestions, setSuggestions] = useState({
    fifteenSecondSuggestion: '',
    ninetySecondSuggestion: '',
    fourMinuteSuggestion: '',
  });

  const handleSuggestionChange = (e) => {
    const { name, value } = e.target;
    setSuggestions({ ...suggestions, [name]: value });
  };

  const handleAISuggestion = (pitchType) => {
    // Placeholder for AI API call
    alert(`AI is generating suggestions for the ${pitchType}`);
  };

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
