import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return this.props.user 
        ? (<p className="allign-right"><b>User:</b> {this.props.text}</p>)
        : (<p className="allign-left"><b>Botty:</b> {this.props.text}</p>)
    }
}
