import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabloidStyle = styled.div`
  background: ${theme.color.black.light};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding: 40px 25px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background: ${theme.color.red.main};
  }
  ${up("md")} {
    width: 200px;
    margin-bottom: 0;
    margin-right: 15px;
  }
  &:first-child {
    background: ${theme.color.red.main};
    &:hover {
      background: ${theme.color.black.light};
    }
  }
  &:last-child {
    border-bottom: 8px solid ${theme.color.red.main};
  }
`;

const Heading = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  position: relative;
  line-height: 0.8em;
  margin-top: 60px;
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
  font-size: 14px;
  font-family: "Lato", sans-serif;
`;

export const TabloidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${up("md")} {
    flex-direction: row;
  }
`;

export const Tabloid = ({ icon, heading, content }) => {
  return (
    <TabloidStyle>
      <FontAwesomeIcon icon={icon} size="3x" />
      <Heading>{heading}</Heading>
      <Paragrapgh>{content}</Paragrapgh>
    </TabloidStyle>
  );
};
