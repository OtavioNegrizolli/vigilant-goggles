import {
    Col,
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
} from "react-bootstrap";

// Declaration for 'ProfessionalExperience' and its properties.
// interface ProfessionalExperience {
//     companyName: string; // Name of the company where the person worked.
//     roleName: string; // Name of the role held by the person.
//     since: string; // Start date of the role.
//     until: string; // End date of the role (if applicable).
// }
/**
 *
 * @param {{onChange: Function, value: ProfessionalExperience}} props
 */
export default function ProfessionalExperience({ onChange, value: xp }) {
    function onAdd() {
        let msg = null;
        switch (type) {
        }
        if (msg) {
            // setValidation(msg);
        } else {
            // setValidation(null);
            onChange({ type, value });
        }
    }

    return (
        <Row>
            <FormGroup as={Col}>
                <FormLabel>Empresa</FormLabel>
                <FormControl />
            </FormGroup>
            <FormGroup as={Col}>
                <FormLabel>Último Cargo</FormLabel>
                <FormControl required />
                <label
                    className="invalid-feedback"
                    // style={{ display: validation ? "inline-block" : "none" }}
                ></label>
            </FormGroup>
            <FormGroup as={Col}>
                <FormLabel>Inicio</FormLabel>
                <FormControl
                    required
                    // type={opt[type].htmlType}
                    // value={opt[type].mask(value)}
                    // onChange={(e) => setValue(opt[type].mask(e.target.value))}
                />
                <label
                    className="invalid-feedback"
                    // style={{ display: validation ? "inline-block" : "none" }}
                >
                    {/* {validation} */}
                </label>
            </FormGroup>
            <FormGroup as={Col}>
                <FormLabel>Fim</FormLabel>
                <FormControl
                    required
                    // type={opt[type].htmlType}
                    // value={opt[type].mask(value)}
                    // onChange={(e) => setValue(opt[type].mask(e.target.value))}
                />
                <label
                    className="invalid-feedback"
                    // style={{ display: validation ? "inline-block" : "none" }}
                >
                    {/* {validation} */}
                </label>
            </FormGroup>
            <Col className="d-flex align-items-end">
                <Button
                    onClick={onAdd}
                    className="text-center"
                    type="button"
                    variant="success"
                >
                    <i className="fa-solid fa-plus"></i>
                    <span style={{ marginLeft: "5px" }}>
                        {/* {socialInfo ? "Editar" : "Novo"} */}
                    </span>
                </Button>
            </Col>
        </Row>
    );
}
