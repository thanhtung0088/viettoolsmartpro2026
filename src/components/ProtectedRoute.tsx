// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const isAuth = localStorage.getItem('isLoggedIn') === 'true' || 
                 !!localStorage.getItem('sb-yvgclpsmclvqyvzwuzyn-auth-token');

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}