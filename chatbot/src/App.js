import React from 'react';
import Chat from './components/Chat'
import InfoBox from './components/InfoBox'
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chatbot</h1>
      </header>
      <div className="App-main">
        <div className="left">
          <div className="top">
            <Chat />
          </div>
          <div className="bottom">
          <Input placeholder='Search...' />
          </div> 
        </div>
        <div className="right">
          <InfoBox />
        </div>  
      </div>
    </div>
  );
}

export default App;
