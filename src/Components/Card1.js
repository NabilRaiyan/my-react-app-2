import React, {Component} from 'react';

// React class component

class Card1 extends Component{
    render(){
        return(
            <div className='cardDiv'>
                <h3>Hello from card 1</h3>
                <p>My name is {this.props.name}</p>
                <p>My age is {this.props.age}</p>
                <p>This is an example of class component in react.</p>
            </div>
        )
    }
}

export default Card1;