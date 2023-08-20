import { styled } from "styled-components";

export const Li = styled.li`
  list-style: none;
`;
export const Label = styled.label`
  display: flex;
  margin: 1em;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  margin-right: 4px;
  width: 40px;
`;
export const Span = styled.span`
  margin: 0 1em 0 1em;
`;
export const Checkbox = styled.input`
  width: 1.1em;
  height: 1.1em;
  border: 1px solid #000;
  border-radius: 3px;
`;
export const Input = styled.input`
  border: 1px solid #f7f7f7;
  border-radius: 5px;
  padding: 1em;
  margin-right: 0.5em;
  background-color: #f7f7fb;
  width: 20vw;
  &:focus {
    outline: none;
  }
`;
