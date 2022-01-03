import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Galary from "./Pages/Galary/Galary";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Nav/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galary" element={<Galary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
