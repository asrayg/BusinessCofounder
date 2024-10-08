import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Business from '../src/business/business';
import CoFounder from '../src/cofounder/cofounder';
import Invest from '../src/investors/investors';
import Legal from './legal/legalframework';
import Email from '../src/emails/emails';
import PitchDeck from './business/pitch';
import BusinessModelCanvas from './business/bmc';
import PitchGenerator from './business/pitchgen';
import Competition from './business/competition';
import Prospectus from './business/prospectus';
import TargetAudience from './business/targetAudience';
import NDAGenerator from './legal/ndaGenerator';
import FindLawyers from './legal/findLawyers';
import TCGenerator from './legal/tnccreator';
import LegalLinks from './legal/links';
import LandingPage from './landingpage/landingpage';
import Header from './header&footer/header';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/header" element={<Header />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmc" element={<BusinessModelCanvas />} />
        <Route path="/business" element={<Business />} />
        <Route path="/pitch" element={<PitchDeck />} />
        <Route path="/pitchgen" element={<PitchGenerator />} />
        <Route path="/prospectus" element={<Prospectus />} />
        <Route path="/target" element={<TargetAudience />} />
        <Route path="/nda" element={<NDAGenerator />} />
        <Route path="/find" element={<FindLawyers />} />
        <Route path="/links" element={<LegalLinks />} />
        <Route path="/competition" element={< Competition/>} />
        <Route path="/cofound" element={<CoFounder />} />
        <Route path="/email" element={<Email />} />
        <Route path="/tnc" element={<TCGenerator />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;