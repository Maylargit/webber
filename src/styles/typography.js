import styled, { css } from "styled-components";
import { theme } from "./theme";

export const Heading = styled.h2`
  color: ${theme.color.black.main};
  font-family: "Poppins", sans-serif;

  ${({ footer }) =>
    footer &&
    css`
      color: #fff;
    `}
`;

export const Anotation = styled.h6`
  color: ${theme.color.red.main};

  ${({ footer }) =>
    footer &&
    css`
      color: #fafad2;
    `}
`;

export const HeadingWrapper = styled.div`
  margin-top: 80px;
  position: relative;
  line-height: 0.05;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 30px;
    content: "";
    border-top: 2px solid ${theme.color.red.main};
  }
`;
