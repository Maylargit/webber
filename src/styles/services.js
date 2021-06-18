import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 80px;
  ${up("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  color: black;
  background: ${theme.color.grey.main};
  padding: 5% 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 80%;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  ${up("md")} {
    padding: 3% 5%;
    width: 20%;
  }
`;
