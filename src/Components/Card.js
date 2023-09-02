// functional component

function Card(props){
    const {name, age} = props;
    return (
        <div className="cardDiv">
            <h3>Hello from Card</h3>
            <p>My name is {name} and i am {age} years old.</p>
            <p>And this is an example of functional component in react.</p>
        </div>
    )
}


export default Card;