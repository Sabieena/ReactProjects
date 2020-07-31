
import React, { Component } from "react";
import Greet from './component/Func';
import Welcome from './component/Welcome';
import Hello from'./component/Hello';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Welcome/>
        <Greet/>
        <Hello/>
      </div>
    )
  }
}

export default App;