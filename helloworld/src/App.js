
import React, { Component } from "react";
import Greet from './component/Func';
import Welcome from './component/Welcome';
import Hello from'./component/Hello';
import Message from'./component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import List from "./component/List";


class App extends Component{
  render(){
    return(
      <div className="App">
        <List />
        {/* <EventBind/> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter />

        <Welcome name ="Tony Stark" heroName="Iron Man"/>
        <Greet/>
        <Hello name=" Friends "/>
        <Hello name=" Everyone "/>
        <Message /> */}

      </div>
    )
  }
}

export default App;