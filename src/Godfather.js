import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";

const Godfather = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default Godfather;
