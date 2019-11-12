import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";

import { authService } from '../services/authService';

import './LoginPage.css';

export function LoginPage() {
  const [email, setEmail] = useState("ii@ii.com");
  const [password, setPassword] = useState("test");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = (e) => {
    authService.authenticate(() => {
      history.replace(from);
    });
    e.preventDefault();
  };
  return (<div>

    <div className="LoginPage">
      <form onSubmit={login}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>

  </div>);
}
