// src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LanguageSelector from './components/LanguageSelector';
import i18n from './i18n';

function App() {
  return (
    <div className="App">
      <LanguageSelector />
      <Home />
      <About />
    </div>
  );
}

export default App;
