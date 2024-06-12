import styled from "styled-components";
import Colors from "../../constants/Colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding: 0 50px;
  padding-bottom: 100px;

  h1 {
    text-align: left;
    width: 100%;
  }

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
  }

  button {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .pagination {
    list-style: none;
    height: 31.5px;
    width: 31.5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2px;
  }

  .active {
    background-color: ${Colors.blue};
    border-radius: 50%;
    color: white;
  }

  .page-item {
    margin-left: 5px;
    list-style: none;
    padding: 2px 12px;
    height: 31.5px;
    width: 51.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    text-decoration: none;
  }

  .page-item-white {
    list-style: none;
    padding: 2px 12px;
    height: 31.5px;
    width: 31.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    background-color: gray;
    border-radius: 50%;
    margin: 0 5px;
  }

  .page-link {
    text-decoration: none;
    cursor: pointer;
  }
`;
