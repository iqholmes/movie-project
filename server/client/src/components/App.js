import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchUser } from "../actions";

const App = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    // we'll only request the current user's info if one is signed in
    if (authenticated) {
      dispatch(fetchUser());
    }
  }, [authenticated, dispatch]);

  return <AppContainer>{props.children}</AppContainer>;
};

export default App;

const AppContainer = styled.div`
  padding-top: 90px;
`;