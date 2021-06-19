import { Container } from "../../styles/container";

import { InnerWrapper } from "../../styles/InnerWrapper";
import { Heading, HeadingWrapper, Anotation } from "../../styles/typography";
import Cards from "./cards";

const Services = () => {
  return (
    <Container light>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading>Works.</Heading>
          <Anotation>SHARE SOME OF OUR CLIENTS' SATISFACTION ...</Anotation>
        </HeadingWrapper>
        <Cards />
      </InnerWrapper>
    </Container>
  );
};

export default Services;
