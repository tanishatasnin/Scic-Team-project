
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
<<<<<<< HEAD
import Nav from './Pages/Shared/Nav/Nav';
=======
import Galary from './Pages/Galary/Galary';
>>>>>>> origin/about
function App() {
  return (
    <div className="App">

      <BrowserRouter>
<<<<<<< HEAD

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

=======
      
      <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/galary"
        element={<Galary />}
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
      
>>>>>>> origin/about
      </BrowserRouter>
    </div>
  );
}

export default App;
