import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfferingsPage from './pages/OfferingsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import PartnersPage from './pages/PartnersPage';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'LOS Technology Limited';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offerings" element={<OfferingsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
