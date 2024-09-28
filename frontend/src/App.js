import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Injured from './components/injured/injured'; // Importing Injured component
import Shelter from './components/injured/shelters'; // Importing Shelter component
import './App.css'; // Importing global CSS

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          {/* Route for Injured Component */}
          <Route path="/" element={<Injured />} />
          {/* Route for Shelter Component */}
          <Route path="/shelter" element={<Shelter />} />
        </Routes>
      </div>
    </Router>
  );
};

// Make sure to export the App component as default
export default App;
