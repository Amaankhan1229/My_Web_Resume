import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {Navbar, HeroSection, Skills, Experience, Projects, Education, ProjectDetails, Contact, Footer} from "./components/index.js"

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
   ${'' /* Gradient - the degree at which the bg color transition (left-right, top-bottom) */}
  background: linear-gradient(  
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0,  100% 0,  100% 100%,  30% 98%, 0 100%);
   
   ${'' /* clipping, top-left, right, bottom-left, point near bottom- right, bottom-left corner */}
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <HeroSection />

          <Wrapper>
            <Skills />
            <Experience /> 
          </Wrapper>

          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>

          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
