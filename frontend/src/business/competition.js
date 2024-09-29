import React from 'react';
import './competition.css';
import Header from '../header&footer/header.js';

const dummyCompetitors = [
  {
    name: "TeleMed Health",
    address: "1234 Medical Blvd, Springfield, IL 62704",
    hours: "Opens 8AM - Closes 6PM",
    phone: "(217) 555-0123",
    website: "https://www.telemedhealth.com",
    targetAudience: "Adults aged 18-50 seeking virtual primary care",
    image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210226041113/ri/1000/picture/2021/2/GrjH4AAAAASUVORK5CYII%3d.png" // Add image URL here
  },
  {
    name: "QuickCare Online",
    address: "5677 Healthcare Way, Austin, TX 73301",
    hours: "Opens 9AM - Closes 7PM",
    phone: "(512) 555-0456",
    website: "https://www.quickcareonline.com",
    targetAudience: "Busy professionals seeking quick consultations",
    image: "https://www.healthcareitnews.com/sites/hitn/files/Telemedicine%204%20-%20712_1.jpg" // Add image URL here
  },
  {
    name: "Pediatric Connect",
    address: "8910 Child St, Orlando, FL 32801",
    hours: "Opens 7AM - Closes 8PM",
    phone: "(407) 555-0789",
    website: "https://www.pediatricconnect.com",
    targetAudience: "Parents looking for pediatric telemedicine services",
    image: "https://blog.payjunction.com/hubfs/BLOG/FEATURED%20IMAGES/telemed-remote-payments.svg" // Add image URL here
  },
  {
    name: "Mental Health Now",
    address: "2300 Therapy Ave, Seattle, WA 98101",
    hours: "Opens 10AM - Closes 9PM",
    phone: "(206) 555-0345",
    website: "https://www.mentalhealthnow.com",
    targetAudience: "Individuals seeking virtual therapy and counseling",
    image: "https://www.adkgroup.com/wp-content/uploads/2021/05/800px-Telemedicine_Consult.jpg" // Add image URL here
  },
  {
    name: "SeniorCare Virtual",
    address: "401 Elderly Rd, Miami, FL 33101",
    hours: "Opens 8AM - Closes 4PM",
    phone: "(305) 555-0647",
    website: "https://www.seniorcarevirtual.com",
    targetAudience: "Seniors and caregivers looking for online medical advice",
    image: "https://www.foley.com/wp-content/uploads/2023/09/docvc860x360.jpg" // Add image URL here
  },
  {
    name: "Women's Health Direct",
    address: "7600 Women's Health Blvd, Los Angeles, CA 90001",
    hours: "Opens 7AM - Closes 5PM",
    phone: "(323) 555-0938",
    website: "https://www.womenshealthdirect.com",
    targetAudience: "Women seeking virtual gynecological and reproductive health services",
    image: "https://www.rmmagazine.com/images/default-source/MagazineImages/2016/07/rm_07-8-16_ff-telemed.jpg?Status=Master&sfvrsn=b8c128dd_0" // Add image URL here
  }
];

const Competition = () => {
  return (
    <div>
      <Header />
      <div className="competition-container">
        <div className="competitor-grid">
          {dummyCompetitors.map((competitor, index) => (
            <div className="competitor-card" key={index}>
              <img src={competitor.image} alt="Competitor" className="competitor-image" />
              <h3>{competitor.name}</h3>
              <p><strong>Address:</strong> {competitor.address}</p>
              <p><strong>Hours:</strong> {competitor.hours}</p>
              <p><strong>Phone:</strong> {competitor.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;
