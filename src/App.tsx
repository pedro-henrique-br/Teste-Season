import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./services/PrivateRoute";

const App = () => {
 return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>

      <Route path='/home' element={<PrivateRoute/>}>
        <Route path='/home' element={<Home />}/>
      </Route>

      <Route path="*" element={<h1>ERROR 404</h1>}/>
    </Routes>
  </BrowserRouter>
  </>
)}

export default App
