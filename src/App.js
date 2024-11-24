import { GlobalStyles } from "./styles/Global/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services"
import { Container } from "./styles/Global/Container.styled";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Home />
          <About />
          <Projects />
          <Services/>
        </Container>
        <Footer />
        <Analytics />
      </>
    </ThemeProvider>
    
  );
};

export default App;
