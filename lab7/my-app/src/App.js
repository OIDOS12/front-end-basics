import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from "./components/Header"
import Content from "./components/task1/Content"
import GoodsGallery from './components/task2/GoodsGallery';

function App() {
  return (
    <Router basename="/front-end-basics/lab7Docs">
      <div className="app-container">
        <Header /> 
        
        <main>
          <Routes>
            <Route path="/task1" element={<Content />} /> 
            
            <Route path="/task2" element={<GoodsGallery />} />
            
            <Route path="/" element={<Navigate to="/task1" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;