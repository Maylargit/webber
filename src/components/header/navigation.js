import React, { useState } from "react";
import {
  NavWrapper,
  Logo,
  DesktopLinks,
  MobileLinks,
  LinkWrapper,
  Ulist,
  ListItem,
  MobileNavWrapper,
  Beta,
  Atag,
} from "../../styles/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <Ulist>
      <ListItem>
        <Atag href="#services">Services</Atag>
      </ListItem>
      <ListItem>
        <Atag href="#works">Works</Atag>
      </ListItem>
      <ListItem>
        <Atag href="#contact">Contact</Atag>
      </ListItem>
    </Ulist>
  );
};

const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <NavWrapper>
      <Logo mobileNav={mobileNav}>
        Godfather Inc .<Beta>BETA</Beta>
      </Logo>
      <LinkWrapper>
        <DesktopLinks>
          <Links />
        </DesktopLinks>
        <MobileLinks>
          <FontAwesomeIcon icon="bars" size="2x" onClick={handleClick} />
        </MobileLinks>
      </LinkWrapper>
      <MobileNavWrapper mobileNav={mobileNav}>
        <FontAwesomeIcon icon="times" size="2x" onClick={handleClick} />
        <Links />
      </MobileNavWrapper>
    </NavWrapper>
  );
};

export default Navigation;
