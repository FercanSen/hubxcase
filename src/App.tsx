import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DocumentScannerPage from './pages/DocumentScannerPage/DocumentScannerPage';
import SignAndStampPage from './pages/SignAndStampPage/SignAndStampPage';
import BatchScanningPage from './pages/BatchScanningPage/BatchScanningPage';
import AdvancedFiltersPage from './pages/AdvancedFiltersPage/AdvancedFiltersPage';
import ExportAndSharePage from './pages/ExportAndSharePage/ExportAndSharePage';
import SliderMenu from './components/SliderMenu/SliderMenu';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<DocumentScannerPage />} />
            <Route path="/sign-and-stamp" element={<SignAndStampPage />} />
            <Route path="/batch-scanning" element={<BatchScanningPage />} />
            <Route path="/advanced-filters" element={<AdvancedFiltersPage />} />
            <Route path="/export-and-share" element={<ExportAndSharePage />} />
          </Routes>
        </div>
        <SliderMenu />
      </div>
    </Router>
  );
}

export default App;
