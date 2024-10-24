import { Container } from "react-bootstrap";
import EmployeeForm from "./pages/employees/form/employee-form";

function App() {
    return (
        <Container fluid="xxl" style={{overflowY: 'auto', height: '100%'}}>
            <EmployeeForm />
        </Container>
    );
}

export default App;
