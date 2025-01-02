import Home from './components/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsArray from './components/project-section/projectsDisplay';
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectsArray />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
