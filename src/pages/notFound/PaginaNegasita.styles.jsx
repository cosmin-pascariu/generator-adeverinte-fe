import styled from "styled-components";
import Colors from "../../constants/Colors";

export const PaginaNegasitaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 50px;

  h1 {
    text-align: center;
    font-size: 4rem;
    width: 100%;
  }

  .link {
    text-decoration: none;
    color: ${Colors.white};
    font-size: 1.5rem;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${Colors.blue};
    cursor: pointer;
  }
`;
