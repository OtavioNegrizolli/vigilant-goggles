import { useCallback, useEffect, useState } from "react";
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
    Stack,
} from "react-bootstrap";

import { useParams, useNavigate, Link } from "react-router-dom";
import useProducts from "../../../hooks/use-products";
import { moneyMask } from "../../../utils";

export default function ProductForm() {
    const navigate = useNavigate();
    const { addProduct, updateProduct, getProduct } = useProducts();
    const { id } = useParams();
    const [isValid, setIsValidated] = useState(false);

    const [product, setProduct] = useState({
        description: "",
        details: "",
        price: "",
        vendor: "",
        category: "",
        measurementUnity: "",
    });

    const goBack = useCallback(
        /** @param {KeyboardEvent} evt */
        (evt) => {
            if (evt.type == "keydown" && evt.code == "Escape") {
                navigate("../", { relative: "path" });
            }
        }
    );

    useEffect(() => {
        document.addEventListener("keydown", goBack);
        if (id != "new") {
            const prod = getProduct(id);
            if (prod) setProduct(prod);
        }
        return () => document.removeEventListener("keydown", goBack);
    }, [id]);

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
            if (id == "new") {
                addProduct(product);
            } else {
                updateProduct(product);
            }
            goBack({ type: "keydown", code: "Escape" });
        } else {
            setIsValidated(true);
        }
    }

    return (
        <Stack direction="vertical">
            <Stack
                direction="horizontal"
                className="justify-content-between py-3"
            >
                <h1 className="h4">Produtos</h1>
                <Link className="btn" to="../">
                    <i className="ms-1 fa-solid fa-arrow-left-long"></i>
                </Link>
            </Stack>
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
                            autoComplete="off"
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
                            autoComplete="off"
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
                                autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
                            onChange={handleChange}
                        >
                            <option disabled value="">
                                Selecione
                            </option>
                            <option value="KG">Kilograma</option>
                            <option value="VL">Litros</option>
                            <option value="UN">Unidade</option>
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
        </Stack>
    );
}
