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
} from "../../styles/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <Ulist>
      <ListItem>Services</ListItem>
      <ListItem>Works</ListItem>
      <ListItem>Contact</ListItem>
    </Ulist>
  );
};

const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  console.log(mobileNav);
  return (
    <NavWrapper>
      <Logo>
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
