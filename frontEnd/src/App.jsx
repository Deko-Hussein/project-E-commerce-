import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AdminDashboard from "./Component/AdminDashBoard"
import Login from "./Component/LogIn"
import SingUp from "./Component/SingIn"
import OrderTracking from "./Component/Oder"
import FAQs from "./Component/FQ"
import ShopAllProducts from "./Component/Product"
function App() {
  return<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
    <Route path="/Sing In" element={<SingUp/>} />
    <Route path="/LogIn" element={<Login/>}/>
    <Route path="/OrderTracking"element={<OrderTracking/>}/>
    <Route path="/FAQ" element={<FAQs/>}/>
    <Route path="/shopAll" element={<ShopAllProducts/>}/>
  </Routes>
}

export default App

// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import AdminDashboard from "./components/AdminDashboard";
// import Login from "./components/Login";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/AdminDashboard" element={<AdminDashboard />} />
//       <Route path="/Login" element={<Login />} />
//     </Routes>
//   );
// }

// export default App;
