import { useRef, MutableRefObject, useState } from "react";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { SubmitButton } from "../components/submit-button";

// import { userSerivice } from "@/core/services/user.service";

import "../auth.css";


export default function SignUpPage() {
    /**@type {MutableRefObject<HTMLInputElement>} */
    const nameRef = useRef();
    /**@type {MutableRefObject<HTMLInputElement>} */
    /**@type {MutableRefObject<HTMLInputElement>} */
    const emailRef = useRef();

    const [password, setPassword] = useState("");
    const [pwdConfirmation, setPwdConfirmation] = useState("");

    /**
     * @param {SubmitEvent} e
     */
    async function handleLogin(e) {
        e.preventDefault();
        if (password != pwdConfirmation) {
            return;
        }
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        // await userSerivice.register({
        //     name,
        //     email,
        //     password,
        //     email,
        // });
    }

    return (
        <main className="login-wrap p-4 p-md-5">
            <Header title="Criar " />
            <form className="signin-form" onSubmit={handleLogin}>
                <Input label="Usuário" required ref={nameRef} />
                <Input label="E-mail" type="email" required ref={emailRef} />
                <Input
                    label="Senha"
                    type="password"
                    required
                    value={password}
                    maxLength="500"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    label="Confirme a senha"
                    type="password"
                    required
                    maxLength="500"
                    value={pwdConfirmation}
                    onChange={(e) => setPwdConfirmation(e.target.value)}
                />
                <SubmitButton label="Registrar" />
            </form>
            <p className="text-center">
                Já tem uma conta?&nbsp;
                <a data-toggle="tab" href="/login">
                    Só entrar
                </a>
            </p>
        </main>
    );
}
