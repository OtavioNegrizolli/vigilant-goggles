import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeForm from "./pages/employees/form/employee-form";
import ProductForm from "./pages/product";

import { AuthProvider } from "./context/auth-context";

import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import RouteGuard from "./components/route-guard";
import HomePage from "./pages/home";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="/" element={<RouteGuard />}>
                        <Route index element={<HomePage />} />
                        <Route path="employee" element={<EmployeeForm />} />
                        <Route path="products" element={<ProductForm />} />
                    </Route>
                    <Route path="*" element={<h1>Go awai</h1>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
