import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "./theme";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;

  width: 100%;
  margin-bottom: 80px;
  overflow: auto;
  flex: 1;

  ${up("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background: ${theme.color.grey.main};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5%;
  width: auto;

  margin-bottom: 20px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  ${up("md")} {
    padding: 0.5%;
    width: auto;
  }
`;

export const WorkImg = styled.img.attrs((props) => ({
  src: props.work,
}))`
  height: 500px;
  ${up("md")} {
    height: 750px;
  }
`;
