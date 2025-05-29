import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RightDetailPage from './pages/RightDetailPage';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/right/:id" element={<RightDetailPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;