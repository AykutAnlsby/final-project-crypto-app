import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ProfileButton from "./Pages/ProfileButton";
import SignInButton from "../Auth0/SignInButton";
import SignOutButton from "../Auth0/SignOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";
import "./header.css";
import DropDown from "./DropDownFolder/DropDown";
import "./DropDownFolder/styles.css";
//import { CryptoState } from "./CryptoContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [selected, setSelected] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();

  //const { currency, setCurrency } = CryptoState();
  console.log("user", user);

  return (
    <Wrapper>
      <img src={logo} alt="Logo" width="120" height="120" />
      <ButtonDiv>
        <Logo onClick={() => history.push("/")}>GoGoCrypto</Logo>

        <DropDown selected={selected} setSelected={setSelected} />

        <SignInButton />

        <SignOutButton />

        {isAuthenticated && <ProfileButton />}
      </ButtonDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: transparent;
  display: flexbox;
  /* justify-content: space-between;
  align-items: baseline; */
`;

const ButtonDiv = styled.div`
  color: transparent;
  display: flexbox;
  justify-content: space-between;
  align-items: baseline;
  width: 85%;

  margin-left: 15px;
`;

const Logo = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin: 0 20px 20px 0;
  vertical-align: top;
  &:hover {
    background-color: white;
    color: whitesmoke;
    border: 0.6px solid lightblue;
    transition: all 0.3s;
    color: antiquewhite;
    color: black;
    border: 2px solid lightblue;
    border-radius: 15px;
  }
`;

// const DropDown = styled.div`
//   position: flex;
//   display: inline-block;
//   &:hover {
//     background-color: #ced0d0;
//     cursor: pointer;
//     transition: 0.3s ease-out;
//   }
// `;
// const DropDownButton = styled.button`
//   background-color: orange;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;

//   &:hover {
//     background-color: #ced0d0;
//     cursor: pointer;
//     transition: 0.3s ease-out;
//   }
// `;

// const DropDownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
// `;
const CurrencyButton = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

export default Header;
