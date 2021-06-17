import { Container } from "../../styles/container";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import { InnerWrapper } from "../../styles/InnerWrapper";

const Header = () => {
  return (
    <Container>
      <InnerWrapper>
        <Jumbotron />
        <Cards />
      </InnerWrapper>
    </Container>
  );
};

export default Header;
