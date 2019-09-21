import React, { Component } from 'react'
import Order from './Order'

export default class DataPresentation extends Component {
    render() {
        let firstname = this.props.data.customer.firstname;
        let lastname = this.props.data.customer.lastname;
        let email = this.props.data.customer.email;
        let orders = this.props.data.orders;
        return (
            <div>
                <div>
                    <p>DataPresentation Customer</p>
                    <p>Firstname: {firstname}</p>
                    <p>Lastname: {lastname}</p>
                    <p>Email: {email}</p>
                </div>
                <br></br>
                
                {(orders.length > 0) 
                ?   <div>
                    <p>There are currently {orders.length} orders for you, {firstname} {lastname}.</p>
                    {orders.map(order => <Order key={order.order_id} order={order}/>)}
                    </div>
                :   <div>There are currently no orders for you, {firstname} {lastname}.</div>
                }
            </div>
        )
    }
}
