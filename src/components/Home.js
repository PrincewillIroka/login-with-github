import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { initialState, reducer } from "../store/reducer";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return <div>Home</div>;
}
