import styled, { css } from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { theme } from "./theme";

export const Button = styled.button`
  border: 3px solid ${theme.color.red.light};
  padding: 15px 10px;
  border-radius: 3px;
  color: ${theme.color.black.light};
  cursor: pointer;
  font-size: 15px;
  width: 60vw;
  ${up("md")} {
    padding: 10px 30px;
    width: auto;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      color: #ffffff;
      background: ${theme.color.black.light};
    `}
`;
