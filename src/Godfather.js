import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Header from "./components/header";
import Footer from "./components/footer";
import Services from "./components/services";
import Works from "./components/works";

const Godfather = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Services />
      <Works />
      <Footer />
    </ThemeProvider>
  );
};

export default Godfather;
