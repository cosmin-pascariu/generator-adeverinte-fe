import styled from "styled-components";

export const GoogleButtonContainer = styled.div`
  width: 100%;
  height: 48px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #eaeaea;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
