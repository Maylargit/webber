import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const Godfather = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>Godfather!!!</div>
    </ThemeProvider>
  );
};

export default Godfather;
