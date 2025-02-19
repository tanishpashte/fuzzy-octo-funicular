  import React from 'react';
  import { HashRouter as Router,Routes, Route } from 'react-router-dom';
  import HomePage from './HomePage';
  import SorryPage from './SorryPage';
  import VerySorryPage from './VerySorryPage';
  import Flower from './Flower';
  import Confirm from './Confirm';
  import { useLocation, Link } from 'react-router-dom';

  function App() {
    return (
      <Router> {/* Router wraps the entire app */}
        <AppContent /> {/* Component using useLocation is a child of Router */}
      </Router>
    );
  }
  
  function AppContent() {  // New component to hold the logic
    const location = useLocation();
  
    return (
      <div>
        {location.pathname !== '/' && (
          <Link to="/" className="absolute top-4 left-8 bg-[#445069] p-2 rounded-lg font-bold">
            <i className="fa-solid fa-house-chimney mr-2"></i>Back to home
          </Link>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sorry" element={<SorryPage />} />
          <Route path="/verysorry" element={<VerySorryPage />} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    );
  }

  export default App;