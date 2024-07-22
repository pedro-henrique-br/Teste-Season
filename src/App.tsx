import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { GetAnimalRows } from "./components/GetAnimalRows";
import { Home } from "../src/components/Home";

const App = () => {

 return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home/animals" element={<GetAnimalRows />}/>
    </Routes>
  </BrowserRouter>
  </>
)}

export default App
