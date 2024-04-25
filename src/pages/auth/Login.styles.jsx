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
  flex-direction: column;
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

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 60px;
  border-radius: 25px;
  border: 1px solid #cacaca;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 520px;
  margin: 0;

  @media (max-width: 768px) {
    box-shadow: none;
    border: none;
    padding: 20px;
  }

  .row {
    display: flex;
  }

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
    width: 100%;
    height: 48px;
    padding: 10px;
    border: 1px solid #d3d3d3;
    background-color: ${Colors.white};
    border-radius: 10px;
    padding: 5px;
    padding-left: 15px;
  }

  input[type="text"],
  input[type="password"] {
    margin-bottom: 10px;
  }

  input[type="password"] {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  input::placeholder {
    color: ${Colors.gray_da};
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

  #googleButton {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .text {
    color: ${Colors.gray};
    font-size: 16px;
    text-align: center;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: ${Colors.blue};
    }
  }

  .password-eye {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #d3d3d3;
    width: 48px;
    border-left: none;

    svg {
      cursor: pointer;
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;

  .remember-me {
    padding-top: 5px;
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 10px;
    width: 15px;
    height: 15px;
    margin-bottom: 3px;
  }

  input[type="checkbox"]:checked {
    background-color: ${Colors.blue};
  }

  a {
    text-decoration: none;
    color: ${Colors.blue};
  }
`;
