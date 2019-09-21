import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return this.props.user 
        ? (<p className="align-right message-user"><b>User:</b> {this.props.text}</p>)
        : (<p className="align-left message-bot"><b>Botty:</b> {this.props.text}</p>)
    }
}
