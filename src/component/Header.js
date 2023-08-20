import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthStateContext } from "../auth/context";
import useAuth from "../auth/useAuth";
import { Container, Logo, Sign, LinkTo, Span, P } from "../styles/HeaderStyle";

const Header = () => {
  const navigate = useNavigate();
  const user = useContext(AuthStateContext);
  const { signOut } = useAuth();

  function signoutHandler() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <Logo>
        <LinkTo to="/">
          <p>Wanted</p>
        </LinkTo>
      </Logo>
      {user ? (
        <Sign>
          <LinkTo to="/todo">
            <Span>Todo</Span>
          </LinkTo>
          <P onClick={signoutHandler}>로그아웃</P>
        </Sign>
      ) : (
        <Sign>
          <LinkTo to="/signin">
            <P>로그인</P>
          </LinkTo>
          <LinkTo to="signup">
            <P>회원가입</P>
          </LinkTo>
        </Sign>
      )}
    </Container>
  );
};

export default Header;
