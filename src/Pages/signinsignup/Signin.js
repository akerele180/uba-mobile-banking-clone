import React from "react";
import "./Signin.css";
import styled from "styled-components";
import { Signinbutton } from "../../components/SigninButton/Signinbutton";
import { BiChevronDown } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { BsCameraFill } from "react-icons/bs";
import Uba from "../../images/UbaLogo.png";
import nig from "../../images/NigerianLogo.png";
import topup from "../../images/Group 3.png";
// import background from "../../bgimage.png";
// import background from "../../images/bgimage.png";

export const SignIn = () => {
  return (
    <Container>
      <TopIcons>
        <LeftSide>
          <img src={nig} alt="nigeria" />
          <BiChevronDown />
        </LeftSide>
        <RightSide>
          <BsCameraFill />
          <HiDotsVertical />
        </RightSide>
      </TopIcons>
      <CompanyLogo>
        <img src={Uba} alt=" uba" />
      </CompanyLogo>
      <MiddleText>
        <h4>Quick Actions</h4>
        <img src={topup} alt="top-up" />
        <h4>Top-up</h4>
      </MiddleText>
      <Signinbutton type="Sign in" />
      <BottomIcons>
        <h3>Open an Account</h3>
        <h3>Sign up</h3>
      </BottomIcons>
    </Container>
  );
};

const Container = styled.div`
  color: #ffffff;
  padding: 0 5vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(20, 1fr);
`;
const TopIcons = styled.div`
  grid-area: 1/1 / span 2 / span 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const LeftSide = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  img {
    width: 30%;
  }
`;
const RightSide = styled.div`
  display: flex;
  font-size: 2em;
  font-weight: bold;
  /* justify-content: space-between; */
  align-items: center;
`;
const CompanyLogo = styled.div`
  grid-area: 4/1 / span 4 / span 1;
  text-align: center;
  img {
    width: 50%;
  }
`;
const MiddleText = styled.div`
  grid-area: 8/1 / span 4 / span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 10%;
    margin: 25px 0 10px;
  }
`;
const BottomIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: 19/1 / span 2 / span 1;
`;
