import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { PermissionsContext } from "../auth/PermissionsContext";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const { role } = useContext(PermissionsContext);

    return (
        <div className="dashboard">
            <h1>Bienvenido al Dashboard</h1>
            {user ? (
                <>
                    <p>Usuario: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>Rol: {role}</p>
                    <button onClick={logout}>Cerrar sesión</button>
                </>
            ) : (
                <p>Cargando usuario...</p>
            )}
        </div>
    );
};

export default Dashboard;
