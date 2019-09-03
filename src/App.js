import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };

  constructor(props){
    super(props);
    console.log("Hello?");
  }

  componentDidMount(){
    console.log("component rendering");
  }

  componentDidUpdate(){
    console.log("component updating");
  }


  add = () =>{
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () =>{
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render(){
    console.log("I'm rendering");
    return(
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;

/*#3_2 Component Life Cycle*/