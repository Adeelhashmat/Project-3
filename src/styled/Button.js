import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  width: 220px;
  height: 44px;
  padding: 10px 18px;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
    cursor: pointer;
  }
`;
export const OutlineButton = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;    
&:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.4s background ease-in;
    cursor: pointer;
  }

`;