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
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const NavbarUserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const NavbarLink = styled(Link)`
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
`;

export const NavbarLogout = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${Colors.white};
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;
