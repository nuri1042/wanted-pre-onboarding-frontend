import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthStateContext } from '../auth/context';
import styled from 'styled-components';
import useAuth from '../auth/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const user = useContext(AuthStateContext);
  const { signOut } = useAuth();

  function signoutHandler() {
    signOut();
    navigate('/');
  }

  return (
    <Container>
      <Logo>
        <LinkTo to='/'>
          <p>Wanted</p>
        </LinkTo>
      </Logo>
      {user ? (
        <Sign>
          <LinkTo to='/todo'>
            <Span>Todo</Span>
          </LinkTo>
          <P onClick={signoutHandler}>로그아웃</P>
        </Sign>
      ) : (
        <Sign>
          <LinkTo to='/signin'>
            <P>로그인</P>
          </LinkTo>
          <LinkTo to='signup'>
            <P>회원가입</P>
          </LinkTo>
        </Sign>
      )}
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  border: 1px solid;
  height: 4em;
`;
const Logo = styled.div`
  margin-left: 3em;
`;
const Sign = styled.div`
  margin-right: 3em;
  display: flex;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`;
const Span = styled.span`
  margin-left: 0.5em;
`;
const P = styled.p`
  margin-left: 1em;
  cursor: pointer;
`;

export default Header;
