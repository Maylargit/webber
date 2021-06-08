import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Button } from "./styles/button";
import { Container } from "./styles/container";
import { Tabloid } from "./styles/tabloid";

const Godfather = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tabloid
          logo="check-square"
          heading="Future Vision"
          content="continal body"
        />
      </Container>
    </ThemeProvider>
  );
};

export default Godfather;
