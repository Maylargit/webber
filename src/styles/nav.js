import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";
import { theme } from "./theme";

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  color: #fff;
  justify-content: space-between;
  margin-bottom: 70px;
  position: relative;
`;

export const Logo = styled.div`
  font-family: "Satisfy", cursive;
  font-size: 25px;
  margin-top: 16px;

  ${up("md")} {
    padding-top: 30px;
  }
  ${({ mobileNav }) =>
    mobileNav &&
    css`
      display: none;
    `};
`;

export const DesktopLinks = styled.div`
  ${down("md")} {
    display: none;
  }
`;
export const MobileLinks = styled.div`
  padding-top: 20px;
  ${up("md")} {
    display: none;
  }
`;
export const LinkWrapper = styled.div``;
export const Ulist = styled.ul`
  padding-top: 30px;
  ${up("md")} {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-between;
    width: 300px;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-family: "Lato", sans-serif;
  margin-bottom: 25px;
  font-size: 15px;
  z-index: 100000;

  ${up("md")} {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const Beta = styled.sup`
  color: ${theme.color.red.main};
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 12px;
`;

export const Atag = styled.a`
  color: ${theme.color.black.main};
  text-decoration: none;
  ${up("md")} {
    color: #fff;
  }
`;

export const MobileNavWrapper = styled.div`
  display: none;
  ${({ mobileNav }) =>
    mobileNav &&
    css`
      display: flex;
      position: relative;
      top: 0;
      left: 0;
      height: 100vh;
      background: white;
      width: 420px;
      transition: transform 0.3s ease-in-out;
      color: black;
      padding: 30px 20px;
    `};
`;
