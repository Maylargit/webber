import { Container } from "../../styles/container";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import { InnerWrapper } from "../../styles/InnerWrapper";
import Navigation from "./navigation";

const Header = () => {
  return (
    <Container dark>
      <InnerWrapper>
        <Navigation />
        <Jumbotron />
        <Cards />
      </InnerWrapper>
    </Container>
  );
};

export default Header;
