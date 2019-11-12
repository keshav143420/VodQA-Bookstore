import React, { useState } from "react";
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";

import { authService } from '../services/authService';

import './LoginPage.css';

export function LoginPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [validated, setValidated] = useState(false);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      authService.authenticate(() => {
        history.replace(from);
      });
      event.preventDefault();
    }
  };
  const handleValidate = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  function disableSubmit() {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*$/.test(email) && password && password.length > 0;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" defaultValue={email} required onChange={e => setEmail(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" defaultValue={password} required onChange={e => setPassword(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password. (atleast 3 char)
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button disabled={!disableSubmit()} type="submit">Submit form</Button>
            <Button onClick={handleValidate}>Validate</Button>
          </div>
        </Form>
      </Row>


    </Container>);
}
