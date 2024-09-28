import React from 'react';
import './competition.css';

const dummyCompetitors = [
  {
    name: "Olathe Animal Shelter",
    address: "508 E Sample St, Olathe, KS 66061",
    hours: "Closes 5PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  },
  {
    name: "Olathe Animal Shelter",
    address: "901 E Blankie Dr, Olathe, KS 66061",
    hours: "Closes 6PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  },
  // Add as many dummy competitors as you want here
  {
    name: "Olathe Animal Shelter",
    address: "508 E Sample St, Olathe, KS 66061",
    hours: "Closes 5PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  },
  {
    name: "Olathe Animal Shelter",
    address: "508 E Sample St, Olathe, KS 66061",
    hours: "Closes 5PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  },
  {
    name: "Olathe Animal Shelter",
    address: "508 E Sample St, Olathe, KS 66061",
    hours: "Closes 5PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  },
  {
    name: "Olathe Animal Shelter",
    address: "508 E Sample St, Olathe, KS 66061",
    hours: "Closes 5PM",
    phone: "(913) 971-6362",
    images: "https://via.placeholder.com/150"
  }
];

const Competition = () => {
  return (
    <div className="competition-container">
      <div className="competitor-grid">
        {dummyCompetitors.map((competitor, index) => (
          <div className="competitor-card" key={index}>
            <img src={competitor.images} alt="Competitor" className="competitor-image" />
            <h3>{competitor.name}</h3>
            <p><strong>Address:</strong> {competitor.address}</p>
            <p><strong>Hours:</strong> {competitor.hours}</p>
            <p><strong>Phone:</strong> {competitor.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competition;
