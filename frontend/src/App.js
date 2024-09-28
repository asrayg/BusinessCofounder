import React from 'react';
import Injured from './components/injured/injured'; // Importing Injured component
import './App.css'; // Importing global CSS

// App Component
const App = () => {
  return (
    <div className="App">
      <h1>Animal Help Portal</h1>
      {/* Render Injured Component */}
      <Injured />
    </div>
  );
};

// Make sure to export the App component as default
export default App;
