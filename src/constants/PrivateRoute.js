import React from "react";
import { Route, Redirect } from "react-router-dom";

import { authService } from '../services/authService';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  console.log(authService.isAuthenticated);
  return (<Route {...rest} render={({ location }) => authService.isAuthenticated ? (children) : (<Redirect to={{
    pathname: "/login",
    state: { from: location }
  }} />)} />);
}
