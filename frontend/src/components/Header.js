import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import DropDownIndex from "./DropDown/DropDownIndex";
import SignInButton from "../Auth0/SignInButton";
import SignOutButton from "../Auth0/SignOutButton";
import { useAuth0 } from "@auth0/auth0-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const history = useHistory();
  const { user } = useAuth0();
  console.log("user", user);
  return (
    <Wrapper>
      <Container>
        <Toolbar>
          <Logo onClick={() => history.push("/")}>GoGoCrypto</Logo>
          <SignInButton></SignInButton>
          <SignOutButton></SignOutButton>
          <DropDown>
            <DropDownButton>
              {/* Currency */}
              {/* <FontAwesomeIcon icon="fa-solid fa-arrow-down" /> */}
            </DropDownButton>
            <DropDownContent>
              <CurrencyButton>USD</CurrencyButton>
              <CurrencyButton>CAD</CurrencyButton>
            </DropDownContent>
          </DropDown>
        </Toolbar>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #060706;
  color: transparent;
  position: static;
`;
const Container = styled.div`
  margin: 0;
`;

const Toolbar = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.div`
  margin: 0;
  padding: 0;
  flex: 1;
  color: gold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;
const DropDownButton = styled.button`
  background-color: orange;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const CurrencyButton = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

export default Header;
