import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import parser from 'xml2json-light';
import axios from 'axios'
import Item from './Item'
import ShippingStatus from './ShippingStatus';

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReceived: false,
            shippingData: null
        };
      }

    componentDidMount(){
        if(this.props.order.status === "shipped") {
            axios.post('https://demo7609961.mockable.io/dhl/status/', {
            }).then(result => {
                let json = parser.xml2json(result.data);
                this.setState({shippingData: json})
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        let order = this.props.order;
        return (
            <div className="order">
                <Card>
                    <Card.Content header={"Order-ID: " + order.order_id + " - " + order.status.toUpperCase()} />
                    <Card.Content extra>
                        <p className="align-left"><Icon name='cart' />Ordered: {order.date}</p>
                    </Card.Content>
                    <Card.Content description={this.props.order.items.map(item => <Item key={item.product_id} item={item}/>)} />
                    <Card.Content extra>
                        <p className="tracking"><Icon name='truck' />{"DHL-Tracking-ID: " + order.dhl_tracking_id}</p>
                        <p className="tracking"><b>{order.status.toUpperCase()}</b></p>
                        {(this.state.shippingData)
                        ? <ShippingStatus status={this.state.shippingData.shipmentStatus}/>
                        : (order.status === "shipped")
                            ? <p>Loading...</p>
                            : <p>Not shipped yet</p>
                        }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
