import { Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap";

import JourneyForm from "./journey-form";

/**
 *
 * @param {{onChange: Function, value: Person}} props
 */
export default function EmployeeDataSection({ onChange, value: employee }) {
    const employeeData = employee.employeeData;
    function handleChange(propName, newValue) {
        const newEmployeeData = {
            ...employeeData,
            [propName]: newValue,
        };
        onChange("employeeData", newEmployeeData);
    }
    return (
        <fieldset className="border rounded p-3">
            <legend>Dados internos</legend>
            <Row className="mb-3">
                <FormGroup as={Col} md="2">
                    <FormLabel htmlFor="registrationNumber">
                        Matrícula
                    </FormLabel>
                    <FormControl
                        readOnly
                        placeholder="Matrícula"
                        id="registrationNumber"
                        name="registrationNumber"
                        value={employeeData.registrationNumber}
                    />
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel htmlFor="office">Departamento</FormLabel>
                    <FormControl
                        id="office"
                        name="office"
                        required
                        value={employeeData.registrationNumber}
                        onChange={(e) => handleChange("office", e.target.value)}
                    />
                    <FormControl.Feedback
                        as="label"
                        type="invalid"
                        htmlFor="office"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel htmlFor="role">Cargo</FormLabel>
                    <FormControl
                        id="role"
                        name="role"
                        required
                        value={employeeData.registrationNumber}
                        onChange={(e) => handleChange("role", e.target.value)}
                    />
                    <FormControl.Feedback
                        as="label"
                        type="invalid"
                        htmlFor="role"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
            </Row>
            <Row className="mb-3">
                <JourneyForm
                    value={employeeData.journey}
                    onChange={handleChange}
                />
            </Row>
        </fieldset>
    );
}
