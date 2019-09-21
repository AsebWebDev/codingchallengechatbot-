import React, { Component } from 'react'
import DataPresentation from './DataPresentation'

export default class InfoBox extends Component {
    render() {
        let backendData = this.props.backendData;
        return (backendData) 
        ?  (
            <div>
                <h1>Infobox</h1>
                <DataPresentation data={backendData.data} />
            </div>
        )
        : (
            <div>
                <h1>Infobox</h1>
                <p>No Data here</p>
            </div>
        )
    }
}
