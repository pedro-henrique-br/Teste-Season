import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const auth = localStorage.getItem("isAuth")
  setTimeout(() => {
    localStorage.removeItem("isAuth")     
  }, 30000)

  return auth === "auth" ? <Outlet /> : <Navigate to="/login" />;
}