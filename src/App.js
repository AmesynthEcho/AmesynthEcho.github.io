import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
// import { Navbar, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppNavbar from './components/AppNavbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Music from './components/Music';
import Commissions from './components/Commissions';
import ToS from './components/ToS'

function App() {
  React.useEffect(() => {
    document.title = "AmesynthEcho"
  })

  return (
    <BrowserRouter>
      <AppNavbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/portfolio" element={<Portfolio />}/>
        <Route exact path="/music" element={<Music />}/>
        <Route exact path="/commissions" element={<Commissions />}/>
        <Route exact path="/tos" element={<ToS />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
