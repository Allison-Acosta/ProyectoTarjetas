import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

const Login = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    return (
        <div className="login-page">
            <h1>Iniciar sesión</h1>
            <button onClick={signInWithGoogle}>Acceder con Google</button>
        </div>
    );
};

export default Login;
