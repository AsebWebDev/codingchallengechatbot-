import React, { Component } from 'react'
import axios from 'axios'
import Chat from './components/Chat'
import InfoBox from './components/InfoBox'
import InputBox from './components/InputBox'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import AIReactions from './data/AIReactions'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.state = {
        messages: [
            {   user: false,
                text: "My name is Botty and i will assist you :)" 
            },
            {   user: false,
                text: "Please type your email adress to receive all informations about your order" 
            }
        ],
        backendData: null
    };
  }

  handleNewMessage(message){
      //RegEx for Email Validation
    let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      //prepare User-Message
    let newMessage = [{user: true, text: message}];
      //check AI for available reactions to message and add corresponding reaction to messages to be added
    if (AIReactions.hasOwnProperty(message.toLowerCase())) {
      newMessage.push({user: false, text: AIReactions[message.toLowerCase()]})
    } else if(re.test(message)) {
      newMessage.push({user: false, text: "You entered an Email. Will check the database for any parcels and get back to you ASAP."})
      this.handleBackendRequest(message);
    } else {
      newMessage.push({user: false, text: "Pardon me, i did not understand you."})
    }
      //add User-Message and possible Bot-Message to Messages
    this.setState({messages: [...this.state.messages, ...newMessage]})
  }

  handleBackendRequest(email){
    let newMessage = {user:false};
    console.log("Backend Request")
    axios.get("https://demo7609961.mockable.io/orders/?customer_email="+email,{
      params: {
        customer_email: email
      }
    })
    .then(result => {
      console.log(result)
      let fullname = result.data.customer.firstname + " " + result.data.customer.lastname
      newMessage.text = "Ok, " + fullname + ", i got your data. Have a look!" 
      this.setState({
        backendData: result,
        messages: [...this.state.messages, newMessage]
      })
    })
    .catch(err => {
      newMessage.text = "Sorry, its us, not you. Is your Email correct? If so, please contact our support hotline (030/123456)."
      this.setState({ messages: [...this.state.messages, newMessage] })
      console.log(err)
    })
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
            <InfoBox backendData={this.state.backendData}/>
          </div>  
        </div>
      </div>
    )
  }
}
