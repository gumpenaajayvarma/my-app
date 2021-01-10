import React from 'react';
import Routes from './app/web/routes'
import './App.css';
import { Link } from 'react-router-dom';

function App(props: any) {
  return <div className='app'>
    <div className='app-nav'>
      <nav>
        <ul className='nav-main'>
            <li key='home-nav-li'>
                <Link to="/">Home</Link>
            </li>
            <li key='about-nav-li'>
                <Link to="/pages/about">About</Link>
            </li>
            <li key='apps-nav-li'>
                <Link to="/pages/apps">Apps</Link>
            </li>
        </ul>
      </nav>
    </div>
    <div className='app-body'>
      <Routes />
    </div>
  </div>
}

export default App;
