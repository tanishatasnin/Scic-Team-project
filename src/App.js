import logo from './logo.svg';
import './App.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Galary from './Pages/Galary/Galary';
import Exp from './Pages/Exp/Exp';
import Plants from './Pages/Plants/Plants';
import Allproduct from './Pages/Plants/Allproduct/Allproduct';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      
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
        path="/services"
        element={<Plants />}
      />
      <Route
        path="/allplants/:productId"
        element={<Allproduct/>}
      />
      <Route
        path="/exp"
        element={<Exp />}
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
