import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Summary from './components/Summary';
import Activity from './components/Activity';
import Orders from './components/Orders';
import Feedback from './components/Feedback';

import Profit from './components/Profit';
import Tasks from './components/Tasks';

import './App.css';

function App() {
  return (
    <div className="App" id='home'>
      <Header />
      <div className="main-layout">
        <SideMenu />
        <h1>Dashboard</h1>
        <div className="main-content">
          <section id="summary">
            <Summary />
          </section>
          <section id="profit">
            <Profit />
          </section>
          <section id="activity">
            <Activity />
          </section>
          <section id="tasks">
            <Tasks />
          </section>
          <section id="orders">
            <Orders />
          </section>
          <section id="feedback">
            <Feedback />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
