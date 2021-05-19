import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const email = useSelector((state) => state.auth.email);

  const handleSignOutClick = () => {
    dispatch(signout(() => {
      history.push('/');
    }));
  }

  const renderLinks = () => {
    if (authenticated) {
      return (
        <React.Fragment>
          <li>{email}</li>
          <li>
            <LinkButton href="#" onClick={handleSignOutClick}>
              Sign Out
            </LinkButton>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </React.Fragment>
      );
    }
  };

  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/">MovieFinder</NavLink>
      </div>

      <NavUl>{renderLinks()}</NavUl>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: hsl(0, 0%, 13%);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 1.5em;
  #logo {
    position: relative;
    float: left;
    width: 150px;
    height: auto;
  }
  a {
    color: #fff;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  li:first-child {
    float: left;
  }
  li {
    margin-left: 0.8em;
    padding: 0.5em;
  }
  li a {
    color: whitesmoke;
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  font-family: Oswald, sans-serif;
  font-size: 20px;
`;