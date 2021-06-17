import styled from "styled-components";

import { theme } from "./theme";

export const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

  padding: 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.color.black.main};
`;
