import React, { Component } from 'react'
import DataPresentation from './DataPresentation'
import chatsupport from '../media/chatbot.png'

export default class InfoBox extends Component {
    render() {
        let backendData = this.props.backendData;
        return (backendData) 
        ?  (
            <div>
                <h1>Your Orders</h1>
                <DataPresentation data={backendData.data} />
            </div>
        )
        : (
            <div>
                <img src={chatsupport} width="500" alt="chatsupport"/>
            </div>
        )
    }
}
