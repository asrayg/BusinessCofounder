import React, { useState } from 'react';
import './targetAudience.css';

const TargetAudience = () => {
  // State for target audience feedback
  const [audienceFeedback, setAudienceFeedback] = useState('Good'); // Simulating a 'Good' response initially
  const [marketingStrategy, setMarketingStrategy] = useState('');
  const [otherAudiences, setOtherAudiences] = useState('');

  const handleApiResponse = () => {
    // Simulating an API response (replace this with an actual API call)
    const feedback = Math.random(); // Randomly decide 'Good', 'Okay', 'Bad' for now
    if (feedback > 0.66) setAudienceFeedback('Good');
    else if (feedback > 0.33) setAudienceFeedback('Okay');
    else setAudienceFeedback('Bad');

    // Simulate returning text from AI API
    setMarketingStrategy('Use targeted social media campaigns and influencer marketing.');
    setOtherAudiences('DIY enthusiasts, students, and professionals in fast-paced environments.');
  };

  // Determine the color of the circle based on feedback
  const getCircleColor = () => {
    if (audienceFeedback === 'Good') return 'green';
    if (audienceFeedback === 'Okay') return 'yellow';
    if (audienceFeedback === 'Bad') return 'red';
  };

  return (
    <div className="target-audience-container">
      <h2>Target Audience</h2>

      <div className="feedback-box">
        <p>Your target audience:</p>
        <div className="circle" style={{ backgroundColor: getCircleColor() }}></div>
      </div>

      <div className="text-boxes">
        <p>Marketing Strategies for Customer Acquisition:</p>
        <textarea
          value={marketingStrategy}
          placeholder="Waiting for AI response..."
          readOnly
        />

        <p>What other audiences you can target:</p>
        <textarea
          value={otherAudiences}
          placeholder="Waiting for AI response..."
          readOnly
        />
      </div>


    </div>
  );
};

export default TargetAudience;
