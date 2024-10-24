import { useState } from "react";

import {
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    Col,
    Button,
} from "react-bootstrap";

import { Typeahead } from "react-bootstrap-typeahead";

const urlRegex =
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/i;
const opt = {
    tel: {
        htmlType: "tel",
        name: "Telefone",
        mask: (value) => {
            if (value && value.length > 0) {
                /** @type {string} */
                const clearValue = value.replace(/\D/gi, "");
                if (clearValue.length < 11) {
                    const ddd = clearValue.substring(0, 2);
                    const p1 = clearValue.substring(2, 6);
                    const p2 = clearValue.substring(6, 10);
                    // const p4 = clearValue.substring(9, 11);

                    return `(${ddd}${ddd.length > 1 ? ")" : ""}${
                        p1 ? ` ${p1}${p2 ? `-${p2}` : ""}` : ""
                    }`;
                }
                const ddd = clearValue.substring(0, 2);
                const p1 = clearValue.substring(2, 7);
                const p2 = clearValue.substring(7, 11);

                return `(${ddd}${ddd.length > 1 ? ")" : ""}${
                    p1 ? ` ${p1}${p2 ? `-${p2}` : ""}` : ""
                }`;
            }
            return value;
        },
    },
    email: { htmlType: "email", name: "E-mail", mask: (v) => v },
    x: { htmlType: "text", name: "Twiter/X", mask: (v) => v },
    facebook: { htmlType: "url", name: "Facebook", mask: (v) => v },
    linkedin: { htmlType: "url", name: "Linked-In", mask: (v) => v },
    github: { htmlType: "url", name: "GitHub", mask: (v) => v },
    site: { htmlType: "url", name: "Site", mask: (v) => v },
};
const typeaheadOptions = Object.entries(opt).map(([k, v]) => ({
    type: k,
    name: v.name,
}));

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
                        onChange={(e) => handleChange("email", e.target.value)}
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
                        onChange={(e) => handleChange("phone", e.target.value)}
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
