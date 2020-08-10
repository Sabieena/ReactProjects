import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'what is your name?'
        }
    }
    
    EventBind = () => {
        this.setState({
            message: 'My name in Ram'
        })
    }

    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                <button onClick ={this.EventBind}> hello </button>
            </div>
        )
    }
}

export default EventBind
