import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabloidStyle, Heading, Paragrapgh, TabloidWrapper } from "./tabloid";

const FooterTabloidStyle = styled(TabloidStyle)`
  flex-direction: row;
`;

const FooterHeading = styled(Heading)`
  margin-top: 0;
`;

const ContactWrapper = styled.div`
  margin-left: 45px;
`;

export const Tabloid = ({ icon, heading, content }) => {
  return (
    <FooterTabloidStyle>
      <FontAwesomeIcon icon={icon} size="3x" />
      <ContactWrapper>
        <FooterHeading>{heading}</FooterHeading>
        <Paragrapgh>{content}</Paragrapgh>
      </ContactWrapper>
    </FooterTabloidStyle>
  );
};
