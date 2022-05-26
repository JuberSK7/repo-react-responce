import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Hero } from './Component/Hero/hero';
import { Service } from './Component/Service/Services';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Test } from './Component/TestSection/Test';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Service/>
     <Portfolio/>
     <Test/>
    </div>
  );
}

export default App;
