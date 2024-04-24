import styled from "styled-components";
import Colors from "../../constants/Colors";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding: 0 50px;

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
  }

  button {
    padding: 5px 10px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
