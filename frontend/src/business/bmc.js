import React, { useState } from 'react';
import './bmc.css';
import html2canvas from 'html2canvas';
import Header from '../header&footer/header.js';

const BusinessModelCanvas = () => {
  const [bmcData, setBmcData] = useState({
    keyPartners: 'Your key partners go here...',
    keyActivities: 'Your key activities go here...',
    keyResources: 'Your key resources go here...',
    valuePropositions: 'Your value propositions go here...',
    customerRelationships: 'Your customer relationships go here...',
    customerSegments: 'Your customer segments go here...',
    channels: 'Your channels go here...',
    costStructure: 'Your cost structure goes here...',
    revenueStreams: 'Your revenue streams go here...',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBmcData({ ...bmcData, [name]: value });
  };

  const handleAIEdit = (box) => {
    // Placeholder for AI edit functionality
    alert(`AI is editing the ${box}`);
    // Call AI API here to edit the content of the box
  };

  // Function to generate the BMC image
  const generateBMCImage = () => {
    const bmcElement = document.getElementById('bmc-grid'); // Select the BMC element
    html2canvas(bmcElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'business_model_canvas.png';
      link.click();
    });
  };

  return (
    <div>
      <Header />
    <div className="bmc-container">

      {/* BMC Grid Layout */}
      <div id="bmc-grid" className="bmc-grid-image">
        <div className="bmc-box">
          <h3>Key Partners</h3>
          <p>{bmcData.keyPartners}</p>
        </div>
        <div className="bmc-box">
          <h3>Key Activities</h3>
          <p>{bmcData.keyActivities}</p>
        </div>
        <div className="bmc-box">
          <h3>Key Resources</h3>
          <p>{bmcData.keyResources}</p>
        </div>
        <div className="bmc-box">
          <h3>Value Propositions</h3>
          <p>{bmcData.valuePropositions}</p>
        </div>
        <div className="bmc-box">
          <h3>Customer Relationships</h3>
          <p>{bmcData.customerRelationships}</p>
        </div>
        <div className="bmc-box">
          <h3>Customer Segments</h3>
          <p>{bmcData.customerSegments}</p>
        </div>
        <div className="bmc-box">
          <h3>Channels</h3>
          <p>{bmcData.channels}</p>
        </div>
        <div className="bmc-box">
          <h3>Cost Structure</h3>
          <p>{bmcData.costStructure}</p>
        </div>
        <div className="bmc-box">
          <h3>Revenue Streams</h3>
          <p>{bmcData.revenueStreams}</p>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="bmc-grid-editable">
        <div className="bmc-box">
          <h3>Key Partners</h3>
          <textarea
            name="keyPartners"
            value={bmcData.keyPartners}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Key Partners')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Key Activities</h3>
          <textarea
            name="keyActivities"
            value={bmcData.keyActivities}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Key Activities')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Key Resources</h3>
          <textarea
            name="keyResources"
            value={bmcData.keyResources}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Key Resources')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Value Propositions</h3>
          <textarea
            name="valuePropositions"
            value={bmcData.valuePropositions}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Value Propositions')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Customer Relationships</h3>
          <textarea
            name="customerRelationships"
            value={bmcData.customerRelationships}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Customer Relationships')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Customer Segments</h3>
          <textarea
            name="customerSegments"
            value={bmcData.customerSegments}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Customer Segments')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Channels</h3>
          <textarea
            name="channels"
            value={bmcData.channels}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Channels')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Cost Structure</h3>
          <textarea
            name="costStructure"
            value={bmcData.costStructure}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Cost Structure')}>AI Edit</button>
        </div>
        <div className="bmc-box">
          <h3>Revenue Streams</h3>
          <textarea
            name="revenueStreams"
            value={bmcData.revenueStreams}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAIEdit('Revenue Streams')}>AI Edit</button>
        </div>
      </div>

      {/* Button to Generate BMC Image */}
      <button className="generate-image-button" onClick={generateBMCImage}>
        Generate BMC Image
      </button>
    </div>
    </div>
  );
};

export default BusinessModelCanvas;
