import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { initialState, reducer } from "../store/reducer";

export default function Login() {

  const [state, dispatch] = useReducer(reducer, initialState)

  if (state.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <div>Login</div>;
}
