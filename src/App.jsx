import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./components/project-section/projectsDisplay";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
