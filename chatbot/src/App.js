import React, { Component } from 'react'
import Chat from './components/Chat'
import InfoBox from './components/InfoBox'
import InputBox from './components/InputBox'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.state = {
        messages: [
            {   user: true,
                text: "First message" 
            },
            {   user: false,
                text: "Second message" 
            },
            {   user: true,
                text: "Third message" 
            },
        ]
    };
  }

  handleNewMessage(message){
    let newMessage = [{user: true, text: message}];
    if (message.toLowerCase().match(/hello/)) newMessage.push({user: false, text: "Hey there! :)"})
    console.log("New Message!")
    this.setState({messages: [...this.state.messages, ...newMessage]})
  }

  render() {
    let messages = this.state.messages;
    return (
      <div className="App">
        <header>
          <h1>Chatbot</h1>
        </header>
        <div className="App-main">
          <div className="left">
            <div className="top">
              <Chat messages={messages}/>
            </div>
            <div className="bottom">
              <InputBox handleNewMessage={this.handleNewMessage} />
            </div> 
          </div>
          <div className="right">
            <InfoBox />
          </div>  
        </div>
      </div>
    )
  }
}
