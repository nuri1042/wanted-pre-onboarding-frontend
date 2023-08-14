import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const Container = styled.div`
    padding: 30px;
    margin-bottom: 30px;
    font-size: 28px;
    border-bottom: 1px solid #000;
    & div {
      width: 25%;
      display: inline-block;
    }
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
  `;

  return (
    <Container>
      <div>
        <StyledLink to="/">Main</StyledLink>
      </div>
      <div>
        <StyledLink to="signin">SignIn</StyledLink>
      </div>
      <div>
        <StyledLink to="signup">SignUp</StyledLink>
      </div>
      <div>
        <StyledLink to="todo">Todo</StyledLink>
      </div>
    </Container>
  );
};

export default Header;
