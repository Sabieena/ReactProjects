
import React, { Component } from "react";
import Greet from './component/Func';
import Welcome from './component/Welcome';
import Hello from'./component/Hello';
import Message from'./component/Message';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Welcome/>
        <Greet/>
        <Hello name=" Friends "/>
        <Hello name=" Everyone "/>
        <Message />

      </div>
    )
  }
}

export default App;