import styled, { css } from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabloidStyle = styled.div`
  background: ${theme.color.black.light};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 75vw;
  padding: 20px 15px;
  cursor: pointer;
  &:hover {
    background: ${theme.color.red.light};
  }
  ${up("md")} {
    width: 200px;
  }
`;

const Heading = styled.h4`
  font-size: 14px;
  margin-bottom: 20px;
  position: relative;
  line-height: 0.8em;
  &:before {
    position: absolute;
    left: 0;
    top: 1.2em;
    height: 0;
    width: 30px;
    content: "";
    border-top: 2px solid ${theme.color.red.main};
  }
`;

const Paragrapgh = styled.p`
  margin-top: 0;
  font-size: 12px;
`;

export const Tabloid = ({ logo, heading, content }) => {
  return (
    <TabloidStyle>
      <FontAwesomeIcon icon={logo} />
      <Heading>{heading}</Heading>
      <Paragrapgh>{content}</Paragrapgh>
    </TabloidStyle>
  );
};
