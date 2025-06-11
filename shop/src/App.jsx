// App.js

import { useState } from 'react';
import { Navbar, Container, Nav, Card, ListGroup } from 'react-bootstrap';
import './App.css';
import data from './data.js'

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {shoes.map((shoe, index) => (
            <div className='col-md-4' key={index}>
              <CardComponent 
                index={index} // ✅ index 전달
                title={shoe.title}
                content={shoe.content}
                price={shoe.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardComponent({ title, content, price, index }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} 
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price}</ListGroup.Item>
        <ListGroup.Item>어ㅉ떠구구</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">링크?</Card.Link>
        <Card.Link href="#">링크 소개</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default App;
