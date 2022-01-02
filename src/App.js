
import './App.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Nav from './Pages/Shared/Nav/Nav';
import Galary from './Pages/Galary/Galary';
// import Login from './Pages/Login/Login/Login';
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
