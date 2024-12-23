import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import SpinnerFullPage from "./SpinnerFullPage";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login");
  }, [isPending, navigate, isAuthenticated]);

  if (isPending) return <SpinnerFullPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
