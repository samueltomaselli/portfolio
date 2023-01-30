import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { BrowserRouter } from "react-router-dom";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-primary bg bg-lightPrimary  dark:bg-primary-900 selection:bg-primary-100 selection:text-black ">
        <div>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
