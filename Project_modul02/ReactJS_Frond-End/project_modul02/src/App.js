import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeProduct from "./components/Page/HomeProduct";
import Introduce from "./components/Page/Introduce";
import Contact from "./components/Page/Contact";
import Login from "./components/Page/Login";
import SignUp from "./components/Page/SignUp";
import Cart from "./components/Page/Cart";
import MainAdminProduct from "./components/Admin_User_Page/MainAdminProduct";
import Admin from "./components/Admin_User_Page/Admin";
import MainAdminUser from "./components/Admin_User_Page/MainAdminUser";
import EditProduct from "./components/Admin_User_Page/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeProduct />}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* Admin */}
        <Route path="/admin" element={<Admin />} /> <Route />
        <Route path="/adminproduct" element={<MainAdminProduct />} />
        <Route path="/adminuser" element={<MainAdminUser />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
