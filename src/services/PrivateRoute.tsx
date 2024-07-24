import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const auth = localStorage.getItem("isAuth")

  return auth === "auth" ? <Outlet /> : <Navigate to="/login" />;
}