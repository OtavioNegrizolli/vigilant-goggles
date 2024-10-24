import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import BasicInformationSection from "./basic-information/basic-information-section";
import EmployeeDataSection from "./employee-data/employeedata-section";

/** @type {Person} */
const personInitalVal = {
    name: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    cpf: "",
    rg: "",
    social: {
        phone: "",
        email: "",
        linkedIn: "",
    },
    address: {
        zip: "",
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        number: "",
        complement: "",
    },
    employeeData: {
        admissionDate: "",
        dismissalDate: "",
        registrationNumber: "",
        office: "",
        role: "",
        salary: "",
        journey: {
            workDays: [],
            startTime: "",
            departureTime: ""
        },
        benefits: [{ type: "", value: "" }],
    },
    additionalData: {
        degree: [
            { title: "", course: "", graduationDate: "", institution: "" },
        ],
        skills: [""],
        professionalExperience: [
            { companyName: "", roleName: "", since: "", until: "" },
        ],
        extensionCourses: [
            { name: "", date: "", institution: "", certifiedHours: "" },
        ],
    },
};

export default function EmployeeForm() {
    const [employee, setEmployee] = useState(personInitalVal);
    const [isValid, setIsValid] = useState(false);

    function handleChange(propName, newVal) {
        setEmployee((prev) => {
            const newState = {
                ...prev,
                [propName]: newVal,
            };
            return newState;
        });
    }

    /** @param {Event} e  */
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            console.log(employee);
        } else {
            console.log(employee);
        }
        setIsValid(true);
    }

    return (
        <>
            <Form
                validated={isValid}
                noValidate
                onSubmit={handleSubmit}
                className="px-5 pt-2"
            >
                <BasicInformationSection
                    onChange={handleChange}
                    value={employee}
                />
                <EmployeeDataSection onChange={handleChange} value={employee} />

                <Row className="justify-content-center p-2">
                    <Col md="3">
                        <Button className="w-100" type="submit">
                            Salvar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}
