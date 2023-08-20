import { styled } from "styled-components";

export const Section = styled.main`
  display: flex;
  justify-content: center;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-height: 15em;
  margin-top: 5em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  border: 1px solid;
  padding: 1em;
  margin: 0.5em 0;
  width: 20vw;
`;
export const Button = styled.button`
  margin-top: 0.5em;
  color: #000;
  width: 10em;
  height: 3em;
  cursor: pointer;
`;
