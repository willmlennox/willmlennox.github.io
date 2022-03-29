import React, { Component, useEffect } from 'react';
import Navibar from './components/Navibar';
import Landing from './components/Landing';
import Courts from './components/Courts';
import Teams from './components/Teams';
import Schedule from './components/Schedule';
import Coaching from './components/Coaching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
    pageLanguage: 'en', includedLanguages: 'en',
    autoDisplay: false, layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  }
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])
  return (    
    <BrowserRouter>
      <div className="App">
        <Navibar/>
        <div id="google_translate_element"></div>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/courts' element={<Courts />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/coaching' element={<Coaching />}/>
          <Route path='/schedule' element={<Schedule />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
