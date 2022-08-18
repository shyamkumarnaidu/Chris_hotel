import React from 'react';

import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Client from "./components/Client";
import Partyhall from "./components/Partyhall";
import Welcome from './components/welcome';

function App() {
  return (
    <div >
      <Header />
      <About />
      <Menu />
      <Welcome />
      <Partyhall />
      <Client />
      
      
    </div>
  );
}

export default App;
