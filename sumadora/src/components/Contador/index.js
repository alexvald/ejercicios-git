import React, { Component } from 'react';

class Contador extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.setState({
      count: 1
    })
  }

  CountClick = (e) => {
    console.log(e.target)
    if (e.target.id === "add") {
      this.setState({
        count: this.state.count + 1
      })
    } else if (e.target.id === "restar" && this.state.count > 0) {
      console.log("estoy restando")
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }

  render() {
    console.log("Renderizando esta funcion")
    return (
     <div>
       <h1> Counter: {this.state.count}</h1>
       <p>
       <button id="add" onClick={this.CountClick}> +</button>
       <button id="restar" onClick={this.CountClick}> -</button>
       <button id="resetear"onClick={this.CountClick}> Reset</button>
       </p>
     </div>
       
    );
  }
}

export default Contador;
