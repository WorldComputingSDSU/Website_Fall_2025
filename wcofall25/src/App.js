import "./App.css";
import HomePage from "./components/Pages/HomePage";
import Projects from "./components/Pages/Projects";
import Membership from "./components/Pages/MemberShipForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
