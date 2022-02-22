import { Container } from "../../styles/container";

import { InnerWrapper } from "../../styles/InnerWrapper";
import { Heading, HeadingWrapper, Anotation } from "../../styles/typography";
import Cards from "./cards";

const Footer = () => {
  return (
    <Container dark>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading id="contact" footer>
            Contact
          </Heading>
          <Anotation id="contact" footer>TO GET IN TOUCH ...</Anotation>
        </HeadingWrapper>
        <Cards />
      </InnerWrapper>
    </Container>
  );
};

export default Footer;
