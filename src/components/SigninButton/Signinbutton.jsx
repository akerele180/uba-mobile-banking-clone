import React from "react";
import styled from "styled-components";

export const Signinbutton = (props) => {
  return (
    <Wrapper>
      <button>{props.type}</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  border-radius: 40px;
  background: #00000071;
  border: 3px solid #ffffff;

  button {
    line-height: 2.5em;
    color: #fff;
    background: transparent;
    border: none;
    width: 100%;
    font-weight: bold;
    font-size: 1.2em;
  }
`;
