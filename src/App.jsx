import Home from "./components/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/projects" element={<ProjectsWrap />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
