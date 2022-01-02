
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
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={<Nav />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
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
