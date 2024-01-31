// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Results from './components/Results';
import Description from './components/Description';
import Nav from './components/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:pairs" element={<Results />} />
        <Route path="/description" element={<Description />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;