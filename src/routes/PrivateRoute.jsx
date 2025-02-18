import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { PermissionsContext } from "../auth/PermissionsContext";

const PrivateRoute = ({ children, allowedRoles }) => {
    const { user } = useContext(AuthContext);
    const { role } = useContext(PermissionsContext);

    if (!user) return <Navigate to="/login" />;
    if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

    return children;
};

export default PrivateRoute;
