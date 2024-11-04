import { useRef, MutableRefObject, useEffect } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { FormFooter } from "./components/form-footer";
import { SubmitButton } from "../components/submit-button";
// import { authService } from "@/core/services/auth.service";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/use-auth";
import "../auth.css";

export default function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    /**@type {MutableRefObject<HTMLInputElement>} */
    const loginRef = useRef();
    /**@type {MutableRefObject<HTMLInputElement>} */
    const passwordRef = useRef();
    /**@type {MutableRefObject<HTMLInputElement>} */
    const rememberMeRef = useRef();

    /**
     * @param {SubmitEvent} e
     */
    async function handleLogin(e) {
        e.preventDefault();
        const login = loginRef.current.value;
        const password = passwordRef.current.value;
        const rememberMe = rememberMeRef.current.checked;
        auth.login({ login, password, rememberMe }).then(() => {
            navigate("/");
        })

    }

    useEffect(() => {
        if (auth.isAuthenticated()) {
            navigate("/");
        }
    }, []);

    return (
        <main className="login-wrap p-4 p-md-5">
            <Header title="Entrar" />
            <form noValidate className="signin-form" onSubmit={handleLogin}>
                <Input label="Usuário" required ref={loginRef} />
                <Input
                    label="Senha"
                    type="password"
                    required
                    ref={passwordRef}
                />
                <SubmitButton label="Entrar" />
                <FormFooter ref={rememberMeRef} />
            </form>
            <p className="text-center">
                Tem conta não?&nbsp;
                <a data-toggle="tab" href="/signup">
                    Crie uma
                </a>
            </p>
        </main>
    );
}
