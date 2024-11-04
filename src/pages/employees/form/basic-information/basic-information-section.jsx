import { useCallback } from "react";
import {
    FormGroup,
    FormLabel,
    FormControl,
    Row,
    Col,
    FormSelect,
} from "react-bootstrap";

import { cpfMask, dateMask, limitLength } from "../../../../utils";

import AddressForm from "./address-from";
import SocialForm from "./social-form";

/**
 *
 * @param {{onChange: Function, value: Person}} props
 */
export default function BasicInformationSection({ onChange, value: employee }) {
    return (
        <fieldset className="border rounded p-2">
            <legend>Dados basicos</legend>
            <Row className="p-3">
                <FormGroup as={Col} sm="12" md="6" lg="6" xl="4">
                    <FormLabel htmlFor="name">Nome completo</FormLabel>
                    <FormControl
                        required
                        id="name"
                        name="name"
                        value={employee.name}
                        onChange={(e) => onChange("name", limitLength(50, e.target.value))}
                    />

                    <FormControl.Feedback
                        as="label"
                        htmlFor="name"
                        type="invalid"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3" xl="2">
                    <FormLabel htmlFor="birthDate">
                        Data de nascimento
                    </FormLabel>
                    <FormControl
                        id="birthDate"
                        name="birthDate"
                        required
                        value={employee.birthDate}
                        onChange={(e) => onChange("birthDate", dateMask(e.target.value))}
                    />
                    <FormControl.Feedback
                        as="label"
                        htmlFor="birthDate"
                        type="invalid"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel htmlFor="gender">Sexo</FormLabel>
                    <FormSelect
                        id="gender"
                        name="gender"
                        required
                        value={employee.gender}
                        onChange={(e) => onChange("gender", e.target.value)}
                    >
                        <option value="" disabled>
                            Selecione
                        </option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </FormSelect>
                    <FormControl.Feedback
                        as="label"
                        htmlFor="gender"
                        type="invalid"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel htmlFor="maritalStatus">Estado Cívil</FormLabel>
                    <FormSelect
                        id="maritalStatus"
                        name="maritalStatus"
                        required
                        value={employee.maritalStatus}
                        onChange={(e) =>
                            onChange("maritalStatus", e.target.value)
                        }
                    >
                        <option value="" disabled>
                            Selecione
                        </option>
                        <option value="S">
                            Solteir{employee.gender == "F" ? "a" : "o"}
                        </option>
                        <option value="C">
                            Casad{employee.gender == "F" ? "a" : "o"}
                        </option>
                        <option value="V">
                            Víuv{employee.gender == "F" ? "a" : "o"}
                        </option>
                    </FormSelect>
                    <FormControl.Feedback
                        as="label"
                        htmlFor="maritalStatus"
                        type="invalid"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col}  sm="12" md="6" lg="3">
                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                    <FormControl
                        id="cpf"
                        name="cpf"
                        required
                        value={employee.cpf}
                        onChange={(e) =>
                            onChange("cpf", cpfMask(e.target.value))
                        }
                    />
                    <FormControl.Feedback
                        as="label"
                        htmlFor="cpf"
                        type="invalid"
                    >
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} sm="12" md="6" lg="3">
                    <FormLabel htmlFor="rg">RG</FormLabel>
                    <FormControl
                        id="rg"
                        name="rg"
                        required
                        value={employee.rg}
                        onChange={(e) =>
                            onChange("rg", limitLength(10, e.target.value))
                        }
                    />
                    <FormControl.Feedback as="label" htmlFor="rg" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
            </Row>
            <AddressForm value={employee} onChange={onChange} />
            <SocialForm value={employee.social} onChange={onChange} />
        </fieldset>
    );
}
