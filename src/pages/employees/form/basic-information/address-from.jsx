import { Row, Col, FormGroup, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { cepMask } from "../../../../utils";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";


const estadosBrasileiros = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
];
/**
 * @param {{onChange:Function, value: Person}} props
 */
export default function AddressForm({ onChange, value: employee }) {
    /** @type {Address} */
    const address = employee.address;
    function handleChange(propName, $e) {
        const newAddress = {
            ...address,
            [propName]: $e?.target ? $e.target.value : $e,
        };
        onChange("address", newAddress);
    }

    return (
        <fieldset className="border-top rounded p-3">
            <legend>Endereço</legend>
            <Row>
                <FormGroup as={Col} md="2">
                    <FormLabel>CEP</FormLabel>
                    <FormControl
                        required
                        value={address.zip}
                        onChange={(e) =>
                            handleChange("zip", cepMask(e.target.value))
                        }
                    />
                    <FormControl.Feedback as="label" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} md="3">
                    <FormLabel>Estado</FormLabel>
                    <FormSelect
                        id="state"
                        required
                        onChange={(e) => handleChange("state", e)}
                        options={estadosBrasileiros}
                        placeholder="Selecione um estado..."
                        selected={address.state}
                    >
                        <option value="" selected disabled>Selecione</option>
                        {
                            ...estadosBrasileiros.map( e => {
                                return <option value={e} key={e}>{e}</option>
                            })
                        }
                    </FormSelect>
                    <FormControl.Feedback as="label" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} md="3">
                    <FormLabel>Cidade</FormLabel>
                    <FormControl
                        required
                        value={address.city}
                        onChange={(e) => handleChange("city", e)}
                    />
                </FormGroup>
                <FormGroup as={Col} md="4">
                    <FormLabel>Bairro</FormLabel>
                    <FormControl
                        required
                        value={address.neighborhood}
                        onChange={(e) => handleChange("neighborhood", e)}
                    />
                    <FormControl.Feedback as="label" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} md="8">
                    <FormLabel>Logradouro</FormLabel>
                    <FormControl
                        required
                        value={address.street}
                        onChange={(e) => handleChange("street", e)}
                    />
                    <FormControl.Feedback as="label" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} md="2">
                    <FormLabel>Nº</FormLabel>
                    <FormControl
                        required
                        value={address.number}
                        onChange={(e) => handleChange("number", e)}
                    />
                    <FormControl.Feedback as="label" type="invalid">
                        Obrigatório
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup as={Col} md="2">
                    <FormLabel>Complemento</FormLabel>
                    <FormControl
                        formNoValidate={false}
                        value={address.complement}
                        onChange={(e) => handleChange("complement", e)}
                    />
                </FormGroup>
            </Row>
        </fieldset>
    );
}
