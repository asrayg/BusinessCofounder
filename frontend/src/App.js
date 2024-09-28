import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Business from '../src/business/business';
import CoFounder from '../src/cofounder/cofounder';
import Invest from '../src/investors/investors';
import Legal from '../src/legal/legal';
import Email from '../src/emails/emails';
import PitchDeck from './business/pitch';
import BusinessModelCanvas from './business/bmc';
import PitchGenerator from './business/pitchgen';
import Competition from './business/competition';
import Prospectus from './business/prospectus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Business />} />
        <Route path="/bmc" element={<BusinessModelCanvas />} />
        <Route path="/business" element={<Business />} />
        <Route path="/pitch" element={<PitchDeck />} />
        <Route path="/pitchgen" element={<PitchGenerator />} />
        <Route path="/prospectus" element={<Prospectus />} />

        <Route path="/competition" element={< Competition/>} />
        <Route path="/cofound" element={<CoFounder />} />
        <Route path="/email" element={<Email />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;