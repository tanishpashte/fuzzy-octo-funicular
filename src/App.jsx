import React from 'react';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SorryPage from './SorryPage';
import VerySorryPage from './VerySorryPage';
import Flower from './Flower';
import Confirm from './Confirm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sorry" element={<SorryPage />} />
          <Route path="/verysorry" element={<VerySorryPage />} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;