import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

import botavatar from '../media/bot.gif'
import useravatar from '../media/user.png'

export default class Message extends Component {
    render() {
        return this.props.user 
        ? (<p className="align-right message-user"><img src={useravatar} alt="" width="50"/><b>User:</b> {this.props.text}</p>)
        : (<p className="align-left message-bot"><img src={botavatar} alt="" width="50"/><b>Botty:</b>{this.props.text}</p>)
    }
}