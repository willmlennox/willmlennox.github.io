import React, { Component } from 'react';
import Navibar from './components/Navibar';
import Landing from './components/Landing';
import Courts from './components/Courts';
import Teams from './components/Teams';
import Schedule from './components/Schedule';
import Coaching from './components/Coaching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (    
    <BrowserRouter>
      <div className="App">
        <Navibar/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/courts' element={<Courts />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/coaching' element={<Coaching />}/>
          <Route path='/schedule' element={<Schedule />}/>
          <Route path='/bookcourts' element={<Schedule />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
