import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <p>Product-ID: {this.props.item.product_id}</p>
                <p>Name: {this.props.item.name}</p>
                <p>Quantity: {this.props.item.qty}</p>
                <p>Price: {this.props.item.price}€</p>
            </div>
        )
    }
}
