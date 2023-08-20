import { styled } from "styled-components";

export const Section = styled.main`
  display: flex;
  justify-content: center;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  // min-height: 20em;
  margin-top: 5em;
  border: 1px solid;
`;
export const P = styled.p`
  ont-size: 1.2em;
`;
export const Form = styled.form`
  display: flex;
`;
export const Input = styled.input`
  border: 1px solid #f7f7f7;
  border-radius: 5px;
  padding: 1em;
  margin-right: 0.5em;
  background-color: #f7f7fb;
  width: 20vw;
  &::placeholder {
    color: #bababa;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    width: 30vw;
  }
`;
export const Button = styled.button`
  background: inherit;
  width: 5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const List = styled.ul`
  margin-top: 2em;
  padding: 0;
  width: 70%;
`;
