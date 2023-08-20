import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  border: 1px solid;
  height: 4em;
`;
export const Logo = styled.div`
  margin-left: 3em;
`;
export const Sign = styled.div`
  margin-right: 3em;
  display: flex;
`;
export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Span = styled.span`
  margin-left: 0.5em;
`;
export const P = styled.p`
  margin-left: 1em;
  cursor: pointer;
`;
