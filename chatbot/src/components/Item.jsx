import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class Item extends Component {
    render() {
        let item = this.props.item;
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
