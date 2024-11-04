import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/use-auth";

import Layout from "../layout";

export default function RouteGuard() {
    const auth = useAuth();
    if (!auth.isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return <Layout />;
}
