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
import Buy from './Pages/Buy/Buy';
import Trees from './Pages/Plants/Trees/Trees';
import SingleTree from './Pages/Plants/Trees/SingleTree';

import Blogs from './Pages/Blog/Blogs';
import SingleBlog from './Pages/Blog/SingleBlog';
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
        path="/services/:productId"
        element={<Allproduct/>}
      />
      <Route
        path="/indoor-plants/:treeId"
        element={<SingleTree/>}
      />
      <Route
        path="/exp"
        element={<Exp />}
      />
      <Route
        path="/trees"
        element={<Trees />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/blogs/:blogId"
        element={<SingleBlog/>}
      />
      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
