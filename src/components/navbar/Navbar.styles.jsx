import styled from "styled-components";
import Colors from "../../constants/Colors";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${Colors.blue};
  padding: 0 50px;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.white};
  font-size: 18px;
  font-weight: 500;
`;

export const NavbarUserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  color: ${Colors.white};
  font-size: 20px;
  font-weight: 500;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  color: ${Colors.white};
  font-size: 20px;
  font-weight: 500;
  gap: 50px;
`;

export const NavbarLink = styled(Link)`
  color: ${Colors.white};
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;

  text-decoration: ${(props) => (props.isSelected ? "underline" : "none")};
`;

export const NavbarLogout = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${Colors.white};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
