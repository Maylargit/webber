import styled, { css } from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";

export const Button = styled.button`
  border: 3px solid ${theme.color.red.main};
  padding: 15px 10px;
  border-radius: 3px;
  color: ${theme.color.black.main};
  cursor: pointer;
  font-size: 15px;
  width: 60vw;
  margin-top: 20px;
  font-family: "Lato", sans-serif;

  ${up("md")} {
    padding: 10px 30px;
    width: auto;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      color: #ffffff;
      background: ${theme.color.black.main};
    `}
`;
