import React, { Component } from 'react';
import Message from './Message'

export default class Chat extends Component {

    render() {
        let messages = this.props.messages;
        if (messages.length > 6) {
            messages.shift()
            messages.shift()
        }

        return (
            <div>
                <p>Hello World</p>
                {messages.map((message,i) => 
                    <Message key={i} text={message.text} user={message.user} />
                )}
            </div>
        )
    }
}
