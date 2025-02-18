import { createContext, useContext } from "react";
import { AuthContext } from './authContext';

export const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    // Simulación de permisos según usuario
    const userPermissions = user?.email === "admin@ejemplo.com" ? "admin" : "user";

    return (
        <PermissionsContext.Provider value={{ role: userPermissions }}>
            {children}
        </PermissionsContext.Provider>
    );
};
