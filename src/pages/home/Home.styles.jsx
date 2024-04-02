import styled from "styled-components";
import Colors from "../../constants/Colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding: 0 100px;

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
    background-color: #f5f5f5;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
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
    list-style: none;
    padding: 2px 12px;
    height: 31.5px;
    width: 31.5px;
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
