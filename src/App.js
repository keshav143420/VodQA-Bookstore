import React from 'react';
import './App.css';

import { Navbar } from 'react-bootstrap';

import VQStore from './components/VQStore';

function App() {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">VodQA-Bookstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto">
            <Nav.Link href="#home">purchase</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <VQStore />
    </div>
  );
}

export default App;
