import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Order from './Order'

export default class DataPresentation extends Component {
    render() {
        let firstname = this.props.data.customer.firstname;
        let lastname = this.props.data.customer.lastname;
        let email = this.props.data.customer.email;
        let orders = this.props.data.orders;
        return (
            <div>
                <div className="top-info">
                    <Card color="red">
                        <Card.Content>
                            <Card.Header content={firstname + ' ' + lastname} />
                            <Card.Meta content={email} />
                            <Card.Description content={'There are currently ' + orders.length + ' orders for you.'} />
                        </Card.Content>
                    </Card>
                </div>
            
                <br></br>
                
                {(orders.length > 0) 
                ?   <div>
                        <div className="orders">
                            {orders.map(order => <Order key={order.order_id} order={order}/>)}
                        </div>
                    </div>
                :   <div>There are currently no orders for you, {firstname} {lastname}.</div>
                }
            </div>
        )
    }
}
