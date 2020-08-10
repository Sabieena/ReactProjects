import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        const{name, heroName} = this.props
        //  you can destructure no of state in similar way
        //  const{state1, heroNstate2ame} = this.state

        return<h1> Welcome { this.props.name } a.k.a {this.props.heroName} </h1>
    }
}
export default Welcome;