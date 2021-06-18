import styled from "styled-components";
import { up } from "styled-breakpoints";

export const InnerWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${up("xl")} {
    width: 1000px;
  }
`;
