import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./Aside";
import Menu from "./components/Menu";
import About from "./Pages/About";
import Excperience from "./Pages/Experience/Experience";
import ExperienceList from "./Pages/Experience/ExperienceList";
import JobsList from "./Pages/Experience/JobsList";
import Home from "./Pages/Home";
import Me from "./Pages/Me";
import NotFound from "./Pages/NotFound";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Logo from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="portfolio-box">
          <div className="portfolio-aside">
            <Aside />
          </div>
          <div className="portfolio-content-box">
            <Logo />
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Excperience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/listex/:id" element={<ExperienceList />} />
              <Route path="/listjob/:id" element={<JobsList />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/me" element={<Me />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
