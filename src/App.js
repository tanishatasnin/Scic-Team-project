import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import ConnectUs from "./Pages/ConnectUs/ConnectUs";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashBoardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Galary from "./Pages/Galary/Galary";
import Home from "./Pages/Home/Home";
// import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Allproduct from "./Pages/Plants/Allproduct/Allproduct";
import Plants from "./Pages/Plants/Plants";
import SingleTree from "./Pages/Plants/Trees/SingleTree";
import Trees from "./Pages/Plants/Trees/Trees";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Nav/Nav";

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
            <Route path="/services" element={<Plants />} />
            <Route path="/services/:productId" element={<Allproduct />} />
            <Route path="/indoor-plants/:treeId" element={<SingleTree />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route exact path="/dashboard" element={<DashBoardHome />} />
              <Route path="/dashboard/myorders" element={<MyOrders />} />
              <Route path="/dashboard/payment" element={<Payment />} />
              <Route path="/dashboard/addreview" element={<AddReview />} />
              {/* <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addProduct`}
                element={
                  <AdminRoute>
                    <AddProduct></AddProduct>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageAllOrder`}
                element={
                  <AdminRoute>
                    <ManageAllOrder />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageallproducts`}
                element={
                  <AdminRoute>
                    <ManageAllProducts></ManageAllProducts>
                  </AdminRoute>
                }
              ></Route> */}
            </Route>

            <Route path="/trees" element={<Trees />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
