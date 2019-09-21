import React, { Component } from 'react'

export default class InfoBox extends Component {
    render() {
        let backendData = this.props.backendData;
        return (backendData) 
        ?  (
            <div>
                <p>Infobox</p>
                <p>Data here</p>
            </div>
        )
        : (
            <div>
                <p>Infobox</p>
                <p>No Data here</p>
            </div>
        )
    }
}
