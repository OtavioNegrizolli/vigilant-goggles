import { Accordion } from "react-bootstrap";

import DegreeSection from "./degree/degree-section";
import ExtensionCourseForm from "./extension-course/extension-course-form";
import ProfessionalExperienceForm from "./professional-experience/professional-experience-form";


/**
 * @param {{onChange: Function, value: Person}} props
 */
export default function AditionalDataSection({ onChange, value: employee }) {
    /** @type {AdditionalData} */
    const additionalData = employee.additionalData;

    function handleChange(propName, $e) {
        const newData = {
            ...additionalData,
            [propName]: $e.target.value,
        };
        onChange("address", newData);
    }

    return (
        <fieldset className="border rounded p-3">
            <legend>Informações Adicionais</legend>
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Nível de Escolaridade</Accordion.Header>
                    <Accordion.Body>
                        <DegreeSection value={additionalData} onChange={handleChange}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Curosos</Accordion.Header>
                    <Accordion.Body>
                        <ExtensionCourseForm value={additionalData} onChange={handleChange}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>ExperiênciaProfissional</Accordion.Header>
                    <Accordion.Body>
                        <ProfessionalExperienceForm value={additionalData} onChange={handleChange}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </fieldset>
    );
}
