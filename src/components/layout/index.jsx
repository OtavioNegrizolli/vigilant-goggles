import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "../header";

export default function Layout() {
    return (
        <>
            <Header />
            <Container
                fluid="xxl"
                style={{ overflowY: "auto" }}
            >
                <Outlet />
            </Container>
        </>
    );
}
