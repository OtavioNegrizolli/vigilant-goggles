import { Anchor, Stack } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/use-auth";

import "./header.css";

export default function Header() {
    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        auth.logout();
        navigate("/login");
    }

    return (
        <header className="page-header">
            <Anchor href="/" style={{ textDecoration: "none" }}>
                <h1>Um site</h1>
            </Anchor>
            <Stack
                as="nav"
                direction="horizontal"
                gap={2}
                className="justify-content-center nav"
                style={{ background: "", flex: 1, margin: 0 }}
            >
                <NavLink to="/">
                    <i className="fa-solid fa-home"></i>
                    Home
                </NavLink>
                <NavLink to="/employee">
                    <i className="fa-solid fa-users"></i>
                    Empregados
                </NavLink>
                <NavLink to="/products">
                    <i className="fa-solid fa-box-open"></i>
                    Produtos
                </NavLink>
            </Stack>
            <Anchor className="button" role="button" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                &nbsp; Logout
            </Anchor>
        </header>
    );
}
