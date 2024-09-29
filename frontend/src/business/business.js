import React, { useState } from 'react';
import './business.css'; // Import the CSS file for styling
import Header from '../header&footer/header.js';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    startupName: '',
    missionStatement: '',
    problem: '',
    uniqueFeature: '',
    targetCustomer: '',
    marketSize: '',
    competitors: '',
    revenueModel: '',
    pricingStrategy: '',
    channels: '',
    product: '',
    keyFeatures: '',
    startupStage: '',
    keyMilestones: '',
    userBase: '',
    founders: '',
    advisors: '',
    financialMetrics: '',
    currentRunway: '',
    fundsRaised: '',
    fundingSought: '',
    fundingUse: '',
    longTermVision: '',
    risks: '',
    scalability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    
    // Functionality to send jsonData to backend or store it locally
    // Example: Store it in localStorage
    localStorage.setItem('businessFormData', jsonData);
  };
  

  return (
    <div>
      <Header />
      <div className="business-form">
        <h2>Tell us more about your startup!</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Overview */}
          <h3>Company Overview</h3>
          <input name="startupName" value={formData.startupName} onChange={handleChange} placeholder="Name of your startup" />
          <textarea name="missionStatement" value={formData.missionStatement} onChange={handleChange} placeholder="Startup's mission statement" />
          <textarea name="problem" value={formData.problem} onChange={handleChange} placeholder="Problem your startup solves" />
          <textarea name="uniqueFeature" value={formData.uniqueFeature} onChange={handleChange} placeholder="What makes your startup unique?" />

          {/* Market Opportunity */}
          <h3>Market Opportunity</h3>
          <input name="targetCustomer" value={formData.targetCustomer} onChange={handleChange} placeholder="Target customer" />
          <input name="marketSize" value={formData.marketSize} onChange={handleChange} placeholder="Size of the market" />
          <input name="competitors" value={formData.competitors} onChange={handleChange} placeholder="Competitors" />

          {/* Business Model */}
          <h3>Business Model</h3>
          <input name="revenueModel" value={formData.revenueModel} onChange={handleChange} placeholder="Revenue model" />
          <input name="pricingStrategy" value={formData.pricingStrategy} onChange={handleChange} placeholder="Pricing strategy" />
          <input name="channels" value={formData.channels} onChange={handleChange} placeholder="Channels to reach customers" />

          {/* Product/Service */}
          <h3>Product/Service</h3>
          <input name="product" value={formData.product} onChange={handleChange} placeholder="Product/service your startup offers" />
          <textarea name="keyFeatures" value={formData.keyFeatures} onChange={handleChange} placeholder="Key features" />
          <input name="startupStage" value={formData.startupStage} onChange={handleChange} placeholder="Startup stage" />

          {/* Traction */}
          <h3>Traction</h3>
          <textarea name="keyMilestones" value={formData.keyMilestones} onChange={handleChange} placeholder="Key milestones, achievements, or partnerships" />
          <input name="userBase" value={formData.userBase} onChange={handleChange} placeholder="Current/ideal userbase" />

          {/* Team */}
          <h3>Team</h3>
          <input name="founders" value={formData.founders} onChange={handleChange} placeholder="Founders and key team members" />
          <input name="advisors" value={formData.advisors} onChange={handleChange} placeholder="Advisors or mentors" />

          {/* Financials */}
          <h3>Financials</h3>
          <input name="financialMetrics" value={formData.financialMetrics} onChange={handleChange} placeholder="Startup's key financial metrics" />
          <input name="currentRunway" value={formData.currentRunway} onChange={handleChange} placeholder="Current runway" />

          {/* Funding */}
          <h3>Funding</h3>
          <input name="fundsRaised" value={formData.fundsRaised} onChange={handleChange} placeholder="Have you raised any funds so far?" />
          <input name="fundingSought" value={formData.fundingSought} onChange={handleChange} placeholder="How much funding are you seeking?" />
          <textarea name="fundingUse" value={formData.fundingUse} onChange={handleChange} placeholder="How do you plan to use the funds?" />

          {/* Vision */}
          <h3>Vision</h3>
          <textarea name="longTermVision" value={formData.longTermVision} onChange={handleChange} placeholder="Long-term vision for the company" />
          <textarea name="risks" value={formData.risks} onChange={handleChange} placeholder="Risks and challenges you foresee" />
          <textarea name="scalability" value={formData.scalability} onChange={handleChange} placeholder="What makes your startup scalable and capable of high growth" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BusinessForm;
