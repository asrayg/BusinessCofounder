import React, { useState } from 'react';
import './findLawyers.css';
import Header from '../header&footer/header.js';
import Map from './mappying.png'

const dummyLawyers = [
  {
    name: "John Doe",
    specialization: "Startup and Business Formation",
    location: "Los Angeles, CA",
    contact: "(555) 123-4567",
    email: "john.doe@lawfirm.com"
  },
  {
    name: "Jane Smith",
    specialization: "Intellectual Property and Trademarks",
    location: "San Francisco, CA",
    contact: "(555) 987-6543",
    email: "jane.smith@lawfirm.com"
  },
  {
    name: "Michael Johnson",
    specialization: "Contract and Business Negotiations",
    location: "Austin, TX",
    contact: "(555) 678-9101",
    email: "michael.johnson@lawfirm.com"
  }
];

const FindLawyers = () => {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const selectLawyer = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  return (
    <div>
      <Header />
      <div className="find-lawyers-container">
        
        {/* Main Content */}
        <div className="main-content">
          {/* Map and Pinpoints */}
          <div className="map-container">
            <img
              src= {Map}
              alt="Map with pinpoints of lawyer locations"
              className="map-image"
            />
            <p>Click on the map pinpoints to find lawyers in your area who specialize in startups.</p>
          </div>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Lawyer Search Tips</h3>
          <ul>
            <li>Look for specialized startup lawyers.</li>
            <li>Check credentials and client reviews.</li>
            <li>Seek advice from local startup communities.</li>
            <li>Consider the lawyer's experience with business structures, trademarks, patents, and contracts.</li>
            <li>Ensure they are knowledgeable in your industry.</li>
          </ul>

          {/* Lawyers in Your Area Section */}
          <div className="lawyer-info">
            <h3>Lawyers in Your Area</h3>
            <ul>
              {dummyLawyers.map((lawyer, index) => (
                <li key={index} onClick={() => selectLawyer(lawyer)}>
                  <strong>{lawyer.name}</strong> - {lawyer.specialization} 
                  <p>{lawyer.location}</p>
                </li>
              ))}
            </ul>

            {selectedLawyer && (
              <div className="lawyer-details">
                <h4>Details for {selectedLawyer.name}</h4>
                <p><strong>Specialization:</strong> {selectedLawyer.specialization}</p>
                <p><strong>Location:</strong> {selectedLawyer.location}</p>
                <p><strong>Contact:</strong> {selectedLawyer.contact}</p>
                <p><strong>Email:</strong> <a href={`mailto:${selectedLawyer.email}`}>{selectedLawyer.email}</a></p>
              </div>
            )}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FindLawyers;
