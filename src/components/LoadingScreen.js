import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h3>Vishwas Tomar</h3>
      <p>Loading Portfolio...</p>
    </div>
  );
};

export default LoadingScreen;