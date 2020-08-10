
import React, { Component } from "react";
import Greet from './component/Func';
import Welcome from './component/Welcome';
import Hello from'./component/Hello';
import Message from'./component/Message';
import Counter from './component/Counter';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Counter />

        {/* <Welcome/>
        <Greet/>
        <Hello name=" Friends "/>
        <Hello name=" Everyone "/>
        <Message /> */}

      </div>
    )
  }
}

export default App;