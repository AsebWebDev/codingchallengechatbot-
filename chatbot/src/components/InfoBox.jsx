import React, { Component } from 'react'
import DataPresentation from './DataPresentation'

export default class InfoBox extends Component {
    render() {
        let backendData = this.props.backendData;
        return (backendData) 
        ?  (
            <div>
                <p>Infobox</p>
                <DataPresentation data={backendData.data} />
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
