import React, { Component } from 'react'
import parseDate from '../helpers/parseDate'

export default class ShippingStatus extends Component {
    render() {
        
        const status = this.props.status;
        const shipmentDate = parseDate(status.shipmentDate);
        const lastUpdate = parseDate(status.lastUpdate);
        const deliveryStatus = (status.status === "DELIVERED_TO_NEIGHBOUR") ? "Delivered to Neighbour" : status.status;
        return (
            <div>
                <p>{shipmentDate}</p>
                <p>{lastUpdate}</p>
                <p>{deliveryStatus}</p>
                <p>{status.extraInfo}</p>
            </div>
        )
    }
}
