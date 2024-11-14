import { useEffect, useState, createContext } from "react";
import { authService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

// import jwt from "jsonwebtoken";

const USER_DATA_KEY = "user.data.key";
const USER_TOKEN_KEY = "user.jwt.token";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    /**
     * @type {[string?, Function]}
     */
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage?.getItem(USER_DATA_KEY) || sessionStorage?.getItem(USER_DATA_KEY) ;
        const storedToken = localStorage?.getItem(USER_TOKEN_KEY) || sessionStorage?.getItem(USER_TOKEN_KEY);
        setToken(storedToken);
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUser(parsedUserData);
            setToken(storedToken);
        }
    }, []);

    function isAuthenticated() {
        if (token) {
            return true;
            /** @type {jwt.JwtPayload|null} */
            const decriptedToken = jwt.decode(token, { json: true });
            const notExpired =
                decriptedToken != null &&
                decriptedToken.exp != undefined &&
                decriptedToken.exp < Date.now() / 1000;

            return notExpired;
        }
        return false;
    }

    /**
     *
     * @param {{ login, password, rememberMe }} loginData
     */
    async function login(loginData) {
        return new Promise((res, rej) => {
            localStorage.setItem(USER_TOKEN_KEY, "token");
            setToken("token");
            res(true);
        });

        try {
            const authData = await authService.login(loginData);
            const userData = { userName: authData.userName };
            const newToken = authData.token;
            if (loginData.rememberMe) {
                localStorage.setItem(JSON.stringify(userData), USER_DATA_KEY);
                localStorage.setItem(newToken, USER_DATA_KEY);
            }
            else {
                sessionStorage.setItem(JSON.stringify(userData), USER_DATA_KEY);
                sessionStorage.setItem(newToken, USER_TOKEN_KEY);
            }
            setToken(newToken);
            setUser(userData);
        } catch (e) {
            if (e instanceof Error) {
            }
            return false;
        }
    }

    async function logout() {
        localStorage.clear(USER_DATA_KEY);
        localStorage.clear(USER_TOKEN_KEY);
        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ login, logout, isAuthenticated, user, token }}
        >
            {children}
        </AuthContext.Provider>
    );
}
