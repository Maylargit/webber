import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";
import Services from "./components/services";

const Godfather = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Services />
    </ThemeProvider>
  );
};

export default Godfather;
