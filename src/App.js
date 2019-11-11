import React, { useState,useEffect } from 'react';
import './App.css';
// import * as ROUTES from './constants/routes';

import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import VQStore from './components/VQStore';
import Login from './components/Login';

// let isLoggedIn = false; //localStorage.getItem('isLoggedIn');
// console.log(isLoggedIn);

function App() {
  // localStorage.setItem('isLoggedIn', false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [isLoggedIn]);
  return (
    
    <Router>

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
        <Switch>
          <Route path="/bookshop">
            <VQStore />
          </Route>
          <Route path="/">
            <Login isLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
        {/* <Login isLoggedIn={setIsLoggedIn} /> */}

        {/* {isLoggedIn && <VQStore />}
        {!isLoggedIn && <Login />} */}
      </div>
    </Router>

  );
}

export default App;
