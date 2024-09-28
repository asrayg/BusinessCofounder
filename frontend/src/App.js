import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Lost from './components/lost/lost';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/lost" replace />} />
          <Route path="/lost" element={<Lost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;