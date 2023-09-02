import './index.css';
import Cards from './Components/Card';
import Card1 from './Components/Card1';
import MiddleSection from './Components/MiddleSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import STATE from './STATE';






function App() {
  return (
    <div className="App">
      <Header />
      <h1>React class component example</h1>

      <Cards name={"Raiyan Al Sultan"} age={23}/>
      <Card1 name={"Nabil raiyan"} age={20}/>
      <Card style={{width: "20rem"}} className="reactCard">
        <Card.Title>Raiyan Al Sultan</Card.Title>
        <Card.Body>My name is Sultan and i am 10 years old.</Card.Body>
        <p>And this is an example of functional component in react.</p>
        <Button>Click</Button>
      </Card>


      <MiddleSection />
      <STATE />
      <Button> Learn More</Button>

      <Footer name={"Raiyan"} date={new Date().getFullYear()}/>

    
    </div>
  );
}

export default App;
