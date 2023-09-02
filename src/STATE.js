import React, { Component } from 'react'
import { Button } from 'react-bootstrap';



export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }

    handleIncrement = ()=>{
        this.setState({
            count : this.state.count + 1
        });
    }

    handleDecrement = ()=>{
        this.setState({
            count : this.state.count - 1
        });
    }
    
  render() {
    const {count} = this.state;
    return (
      <div>
        <Button className='button' onClick={this.handleIncrement}>+</Button>
        <h1 className='count'>Count : {count}</h1>
        <Button className='button' onClick={this.handleDecrement} disabled={ count===0 ? true : false}>-</Button>
      </div>
    )
  }
}
