import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { initialState, reducer } from "../store/reducer";
import Styled from "styled-components";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <Wrapper>
      <div className="container">
        Welcome<span className="boldText">Username,</span> to super amazing app
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  font-size: 18px;
  font-family: Arial;
  justify-content: center;
  margin-top: 250px;

  .boldText{
    font-weight: bold;
    padding: 0 8px;
  }
}
`;
