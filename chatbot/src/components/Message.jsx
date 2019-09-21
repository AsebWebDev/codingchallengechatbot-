import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return this.props.user 
        ? (<p className="allign-right">User: {this.props.text}</p>)
        : (<p className="allign-left">Bot: {this.props.text}</p>)
    }
}
