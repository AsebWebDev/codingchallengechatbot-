import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
      }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitpressed")
        this.props.handleNewMessage(this.state.value)   
        this.setState({value:''}) 
    }

    handleChange(e){
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.keyCode)
        
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input placeholder='Search...' value={this.state.value} onChange={e => this.handleChange(e)}  />
                </form>
            </div>
        )
    }
}
