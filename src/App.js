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
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Plants from './Pages/Plants/Plants';
import Allproduct from './Pages/Plants/Allproduct/Allproduct';
import SingleTree from './Pages/Plants/Trees/SingleTree';
import Trees from './Pages/Plants/Trees/Trees';
// import Footer from './Pages/Shared/Footer/Footer';
import ConnectUs from './Pages/ConnectUs/ConnectUs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ConnectUs />} />


            <Route path="/galary" element={<Galary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/services"
              element={<Plants />}
            />
            <Route
              path="/services/:productId"
              element={<Allproduct />}
            />
            <Route
              path="/indoor-plants/:treeId"
              element={<SingleTree />}
            />

            <Route
              path="/trees"
              element={<Trees />}
            />
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
