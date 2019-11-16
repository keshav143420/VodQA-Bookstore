import React from "react";
import { Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { authService } from '../services/authService';

export function AuthButton() {
  let history = useHistory();

console.log('aaa',authService.isAuthenticated);
  return authService.isAuthenticated ? (<Nav.Link onClick={() => {
    authService.signout(() => history.push("/"));
  }}>
    Sign Out
      </Nav.Link>) : (
      // <Nav.Link>You are not logged in.</Nav.Link>
      <Nav.Link onClick={() => history.push('/shopbook')}>
        Sign In
      </Nav.Link>);
}
