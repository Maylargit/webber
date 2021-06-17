import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";

export const Jumbo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 80px;
  align-items: center;
  color: #fff;
  font-size: 50px;
  line-height: 0.9;
  font-weight: 800;
  justify-content: space-between;
  position: relative;
  margin-left: 50px;

  margin-right: 50px;
  font-family: "Poppins", sans-serif;
  ${up("md")} {
    flex-direction: column;
    width: auto;
    align-items: flex-start;
    width: 400px;
    margin-left: 0;
  }
  &:before {
    position: absolute;
    left: 0;
    top: -20px;
    height: 0;
    width: 50px;
    content: "";
    border-top: 2px solid ${theme.color.red.main};
  }
`;
