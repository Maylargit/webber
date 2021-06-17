import styled from "styled-components";
import { up } from "styled-breakpoints";

export const InnerWrapper = styled.main`
  display: flex;
  flex-direction: column;

  ${up("xl")} {
    width: 800px;
  }
`;
