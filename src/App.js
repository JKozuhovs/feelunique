import './App.css';
import NavBar from './components/NavBar';
import FlagPopUp from './components/FlagPopUp';
import TestComponent from './components/TestComponent';
import FirstBanner from './components/FirstBanner';
import SecondBanner from './components/SecondBanner';
import ThirdBanner from './components/ThirdBanner';
import LogoLayer from './components/LogoLayer';
import BestSellers from './components/BestSellers';
import MakeupItems from './components/MakeupItems';
import SkinItems from './components/SkinItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react';

library.add(fas);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    <main>
      <div id="main">
        <NavBar />
        <FirstBanner />
        <SecondBanner />
        <ThirdBanner />
        <LogoLayer />
        <BestSellers />
        {/* <FlagPopUp /> */}
        {/* {<TestComponent />} */}
      </div>
    </main>
    </div>
  );
}

export default App;
