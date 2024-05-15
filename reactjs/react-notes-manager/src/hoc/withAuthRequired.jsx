import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withAuthRequired(Component) {
  return function ProtectedComponent() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.authSlice.auth.user);
    useEffect(() => {
      if (!user) {
        navigate("/sign-in");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return user && <Component />;
  };
}