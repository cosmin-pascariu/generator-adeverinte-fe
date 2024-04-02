import styled from "styled-components";
import Colors from "../../constants/Colors";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${Colors.white};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  border-radius: 25px;
  border: 1px solid #cacaca;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h1 {
    color: #000;
    text-align: left;
    text-align: left;
    font-size: 32px;
    font-weight: 400;
  }

  h5 {
    text-align: left;
    margin-bottom: 20px;
    color: ${Colors.gray};
    font-size: 15px;
    font-weight: 400;
  }

  input {
    width: 482px;
    height: 48px;
    padding: 10px;
    border: 1px solid #d3d3d3;
    background-color: ${Colors.white};
    border-radius: 10px;
    margin-bottom: 15px;
  }

  input::placeholder {
    color: ${Colors.gray_da};
    padding: 5px;
  }

  label {
    color: ${Colors.black_c3};
    font-size: 16px;
    margin-bottom: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-radius: 10px;
    background-color: ${Colors.blue};
    color: ${Colors.white};
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 11px;
  }

  button:hover {
    background-color: #1e3f75;
  }

  button:active {
    background-color: #1e3faa;
  }

  span {
    color: ${Colors.gray};
    font-size: 16px;
    margin-top: 27px;
    text-align: center;

    a {
      text-decoration: none;
      color: ${Colors.blue};
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;

  input {
    margin-right: 10px;
    width: 15px;
    height: 12px;
  }

  input[type="checkbox"]:checked {
    background-color: ${Colors.blue};
  }

  a {
    text-decoration: none;
    color: ${Colors.blue};
  }
`;
