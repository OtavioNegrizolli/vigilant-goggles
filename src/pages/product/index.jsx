import { useState } from "react";
import {
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    InputGroup,
    Row,
    Button,
    FormSelect,
} from "react-bootstrap";

import { moneyMask } from "../../utils";

export default function ProductForm() {
    const [product, setProduct] = useState({
        description: "",
        details: "",
        price: "",
        vendor: "",
        category: "",
        measurementUnity: "",
    });
    const [isValid, setIsValid] = useState(false);

    function handleChange(e) {
        setProduct((prev) => {
            const newState = {
                ...prev,
                [e.target.name]: e.target.value,
            };
            return newState;
        });
    }

    /** @param {Event} e  */
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            console.log(product);
        } else {
            console.log(product);
        }
        setIsValid(true);
    }

    return (
        <Form
            noValidate
            validated={isValid}
            onSubmit={handleSubmit}
            className="px-5 pt-2"
        >
            <Row>
                {/* description */}
                <FormGroup as={Col} sm="12">
                    <FormLabel>Descrição</FormLabel>
                    <FormControl
                        name="description"
                        id="description"
                        required
                        value={product.description}
                        onChange={handleChange}
                    />
                    <FormControl.Feedback
                        type="invalid"
                        as="label"
                        htmlFor="description"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                {/* <!-- details --> */}
                <FormGroup as={Col} sm="12">
                    <FormLabel>Detalhes</FormLabel>
                    <FormControl
                        name="details"
                        id="details"
                        as="textarea"
                        value={product.details}
                        onChange={handleChange}
                    ></FormControl>
                </FormGroup>
                {/* <!-- price --> */}
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel>Preço</FormLabel>
                    <InputGroup>
                        <InputGroup.Text>R$</InputGroup.Text>
                        <FormControl
                            name="price"
                            id="price"
                            required
                            onKeyDown={moneyMask}
                            value={product.price}
                            onChange={handleChange}
                        />
                        <FormControl.Feedback
                            type="invalid"
                            as="label"
                            htmlFor="price"
                        >
                            Obrigatório
                        </FormControl.Feedback>
                    </InputGroup>
                </FormGroup>
                {/* vendor */}
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel>Fabricante</FormLabel>
                    <FormControl
                        name="vendor"
                        id="vendor"
                        required
                        value={product.vendor}
                        onChange={handleChange}
                    />
                    <FormControl.Feedback
                        type="invalid"
                        as="label"
                        htmlFor="vendor"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel>Categoria</FormLabel>
                    <FormSelect
                        name="category"
                        id="category"
                        required
                        value={product.category}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Selecione
                        </option>
                        <option value="1">Limpeza</option>
                        <option value="2">Eletro-domésticos</option>
                        <option value="3">Eltro-eletrônicos</option>
                        <option value="4">Informática</option>
                        <option value="5">Vestuario</option>
                    </FormSelect>
                    <FormControl.Feedback
                        type="invalid"
                        as="label"
                        htmlFor="category"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel>Uni. de Medida</FormLabel>
                    <FormSelect
                        name="measurementUnity"
                        id="measurementUnity"
                        required
                        value={product.measurementUnity}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Selecione
                        </option>
                        <option value="1">Kilograma</option>
                        <option value="2">Litros</option>
                        <option value="3">Unidade</option>
                    </FormSelect>
                    <FormControl.Feedback
                        type="invalid"
                        as="label"
                        htmlFor="measurementUnity"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
            </Row>
            <Row className="mt-3 justify-content-center">
                <Col sm="3">
                    <Button type="submit" className="w-100">
                        Enviar
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
