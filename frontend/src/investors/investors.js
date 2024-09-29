import React, { useState, useEffect } from 'react';
import TripleToggleSwitch from "./triple";
import "./investors.css";
import investorsData from './investors.json';
import dummyImage from './profile image/dummyPFP.jpg';
import Header from '../header&footer/header.js';

function Invest() {
  const [selectedOption, setSelectedOption] = useState('left');
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(investorsData);
  }, []);

  const labels = {
    left: {
      title: "Business CoFounders",
      value: "left",
      // desc: "View your potential business co-founders",
    },
    right: {
      title: "Angel Investors",
      value: "right",
      // desc: "Check out potential angel investors",
    },
    center: {
      title: "Advisory Board Members",
      value: "center",
      // desc: "Get in touch with potential advisory board members",
    },
  };

  const onChange = (value) => {
    console.log("Selected value:", value);
    setSelectedOption(value);
  };

  const getImageSrc = (profilePic) => {
    if (profilePic) {
      // Check if the profilePic is an external URL
      if (profilePic.startsWith('http://') || profilePic.startsWith('https://')) {
        return profilePic;
      }
      // If it's a local path, prepend the public URL
      return `${process.env.PUBLIC_URL}${profilePic}`;
    }
    // If no profilePic is provided, use the dummy image
    return dummyImage;
  };

  const renderContent = () => {
    if (!data) return null;

    let content;
    switch (selectedOption) {
      case 'left':
        content = data.cofounders;
        return (
          <div>
            <h2>Business CoFounders</h2>
            {content.map(cofounder => (
              <div key={cofounder.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <img
                  src={getImageSrc(cofounder.profilePic)}
                  alt={`${cofounder.name} - profile`}
                  style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{cofounder.name}</h3>
                  <p style={{ margin: '0' }}><strong>Role:</strong> {cofounder.role}</p>
                  <p style={{ margin: '0' }}><strong>Email:</strong> {cofounder.email}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'center':
        content = data.advisory_board_members;
        return (
          <div>
            <h2>Advisory Board Members</h2>
            {content.map(member => (
              <div key={member.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <img
                  src={getImageSrc(member.profilePic)}
                  alt={`${member.name} - profile`}
                  style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{member.name}</h3>
                  <p style={{ margin: '0' }}><strong>Expertise:</strong> {member.expertise}</p>
                  <p style={{ margin: '0' }}><strong>Email:</strong> {member.email}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'right':
        content = data.investors;
        return (
          <div>
            <h2>Angel Investors</h2>
            {content.map(investor => (
              <div key={investor.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'start' }}>
                <img
                  src={getImageSrc(investor.profilePic)}
                  alt={`${investor.name} - profile`}
                  style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{investor.name}</h3>
                  <p style={{ margin: '0' }}><strong>Email:</strong> {investor.email}</p>
                  <h4 style={{ margin: '10px 0 5px 0' }}>Investments:</h4>
                  <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    {investor.investments.map((investment, index) => (
                      <li key={index}>
                        {investment.company}: ${investment.amount}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div><Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Show Me Nearby:</h1>
        <TripleToggleSwitch labels={labels} onChange={onChange} />
        <div style={{ marginTop: '20px', fontSize: '16px', maxWidth: '800px', width: '100%' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Invest;