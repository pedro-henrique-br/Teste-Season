import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

const App = () => (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  </>
)

export default App
