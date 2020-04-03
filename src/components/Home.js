import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";


export default function Home() {
  const { state } = useContext(AuthContext);

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
  align-items: center;
  height: 100vh;


  .boldText{
    font-weight: bold;
    padding: 0 8px;
  }
}
`;
