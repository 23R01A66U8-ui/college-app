import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Compare from "./Compare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college/:id" element={<Detail />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  );
}

export default App;