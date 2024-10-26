import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./components/project-section/projectsDisplay";
import ProfileMain from "./components/profile/profileHome";
import CollabForm from "./components/forms/collabForm";
import ContactForm from "./components/forms/contactForm";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectDisplay />} />
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/collab-form" element={<CollabForm />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
