import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
    super(props)

    this.state = {
         count : 0
    }
}
 
increment(){
    this.setState({
        count : this.state.count + 1
    },
    // whenever code is executed after state has been changed use callback function and pass it as a second parameter of setState
    () => console.log('callback value', this.state.count )
    )
    // console.log(this.state.count);  Asynchronous 

    // when you have to update the state based on previous state, you need to pass function as argument instead of passing its as a object
}
    render() {
        return (
            <div>
                <div> Count - { this.state.count }</div>
                <button onClick ={() => this.increment() }> Increment  </button>
            </div>
        )
    }
}

export default Counter
