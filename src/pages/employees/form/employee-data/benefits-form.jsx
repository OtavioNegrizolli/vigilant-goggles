import {
    Col,
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
} from "react-bootstrap";

/**
 *
 * @param {{onChange: Function, value: Benefit}} props
 */
export default function BenefitsForm({ onChange, value }) {
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
