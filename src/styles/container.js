import styled, { css } from "styled-components";
import { up, down, between, only } from "styled-breakpoints";
import { theme } from "./theme";

export const Container = styled.main`
  padding: 5px 30px;
  display: flex;
  flex-direction: column;

  ${up("md")} {
    padding: 10px 100px;
    flex-direction: row;
  }
`;
