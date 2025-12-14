import { Navigate } from "react-router-dom";

function useAuth() {
  const isLoggedIn = true; 
  return { isLoggedIn };
}

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
