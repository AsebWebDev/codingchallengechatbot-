import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Item from './Item'

export default class Order extends Component {
    render() {
        let order = this.props.order;
        return (
            <div className="order">
                <Card>
                    <Card.Content header={"Order-ID: " + order.order_id} />
                    <Card.Content extra>
                        <p className="align-left"><Icon name='cart' />{order.date}</p>
                    </Card.Content>
                    <Card.Content description={this.props.order.items.map(item => <Item key={item.product_id} item={item}/>)} />
                    <Card.Content extra>
                        <p className="align-left tracking"><Icon name='truck' />{"DHL-Tracking-ID: " + order.dhl_tracking_id}</p>
                        <p className="tracking"><b>{order.status.toUpperCase()}</b></p>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
