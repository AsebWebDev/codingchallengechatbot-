import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        return (
            <div>
                <p>Order: {this.props.order.order_id}</p>
            </div>
        )
    }
}
