import { useState } from "react";
import { phoneMask, limitLength } from "../../../../utils";
import {
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    Col
} from "react-bootstrap";


/**
 * @param {{onChange: Function, value: Social }} props
 */
export default function SocialForm({ onChange, value: socialInfo }) {
    function handleChange(propName, newVal) {
        onChange("social", { ...socialInfo, [propName]: newVal });
    }

    return (
        <fieldset className="border-top rounded p-4">
            <legend>Contatos/Redes Sociais</legend>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormControl
                        id="email"
                        required
                        type="email"
                        value={socialInfo.email}
                        onChange={(e) => handleChange("email", limitLength(50, e.target.value))}
                    />
                    <FormControl.Feedback
                        as="label"
                        htmlFor="email"
                        type="invalid"
                        className="invalid-feedback"
                        // style={{ display: validation ? "inline-block" : "none" }}
                    >
                        {socialInfo.email?.length > 0
                            ? "E-mail inválido!"
                            : "E-mail é obrigatório!"}
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <FormControl
                        id="phone"
                        required
                        value={socialInfo.phone}
                        type="tel"
                        onChange={(e) => handleChange("phone", phoneMask(e.target.value))}
                    />
                    <FormControl.Feedback
                        as="label"
                        htmlFor="phone"
                        className="invalid-feedback"
                        type="invalid"
                    >
                        {socialInfo.email?.length > 0
                            ? "Telefone inválido!"
                            : "Telefone é obrigatório!"}
                    </FormControl.Feedback>
                </FormGroup>
            </Row>
        </fieldset>
    );
}
