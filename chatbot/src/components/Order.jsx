import React, { Component } from 'react'
import Item from './Item'

export default class Order extends Component {
    render() {
        return (
            <div>
                <p>Order-ID: {this.props.order.order_id}</p>
                <p>Status: {this.props.order.status} </p>
                <p>Date: {this.props.order.date} </p>
                <p>DHL Tracking-ID: {this.props.order.dhl_tracking_id} </p>
                {this.props.order.items.map(item => <Item key={item.product_id} item={item}/>)}
            </div>
        )
    }
}
