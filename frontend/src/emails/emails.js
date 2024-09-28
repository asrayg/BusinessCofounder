import React from 'react';
import Header from '../header&footer/header.js';

function Email() {
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0'
      }}>
        Hello, World!
      </div>
    </div>
  );
}

export default Email;