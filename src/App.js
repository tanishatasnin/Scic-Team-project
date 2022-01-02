
import './App.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Nav from './Pages/Shared/Nav/Nav';
import Galary from './Pages/Galary/Galary';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/galary"
            element={<Galary />}
          />
          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
