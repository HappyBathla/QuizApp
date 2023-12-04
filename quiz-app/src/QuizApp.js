// QuizApp.js
// QuizApp.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RightPage from './components/Right';
import RightNextPage from './components/RightNext';

const QuizApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/right" element={<RightPage />} />
        <Route path="/right-next" element={<RightNextPage />} />
        {/* Add additional routes as needed */}
        <Route path="/*" element={<Navigate to="/right" />} />
      </Routes>
    </Router>
  );
};

export default QuizApp;

