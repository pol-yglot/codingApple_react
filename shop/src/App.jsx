import { useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Card, ListGroup } from 'react-bootstrap';
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
          {shoes.map((shoe, index) => {
            return (
              <div className='col-md-4' key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} />
                  <Card.Body>
                    <Card.Title>{shoe.title}</Card.Title>
                    <Card.Text>{shoe.price}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>ㅇㅇㅇ</ListGroup.Item>
                    <ListGroup.Item>어ㅉ떠구구</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">링크?</Card.Link>
                    <Card.Link href="#">링크 소개</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default App;
