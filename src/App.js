import logo from './logo.svg';
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
function App() {
  return (
    <div className="App">
      <h1>app.js</h1>
      <h2> hello project</h2>
      <h2>oohhh no</h2>
     
      <BrowserRouter>
      
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
        path="/about"
        element={<About />}
      />
      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
