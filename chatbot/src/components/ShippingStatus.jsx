import React, { Component } from 'react'
import parseDate from '../helpers/parseDate'

export default class ShippingStatus extends Component {
    render() {
        
        let status = this.props.status;
        let shipmentDate = parseDate(status.shipmentDate);
        let lastUpdate = parseDate(status.lastUpdate);
        return (
            <div>
                <p>{shipmentDate}</p>
                <p>{lastUpdate}</p>
                <p>{status.status}</p>
                <p>{status.extraInfo}</p>
            </div>
        )
    }
}
