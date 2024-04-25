import styled from "styled-components";
import Colors from "../../constants/Colors";

export const SecretariesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding: 0 50px;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th {
    padding: 10px;
    text-align: left;
    background-color: ${Colors.white};
  }

  th:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  th:nth-child(7) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #d5d5d5;
    min-width: 100px;
  }

  button {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .absolute {
    position: absolute;
  }
`;
