import { Stack, ListGroup, ListGroupItem } from "react-bootstrap";

import DegreeForm from "./degree-form";

export default function DegreeSection({ onChange, value: additionalDate }) {
    const degree = additionalDate.degree;
    return (
        <>
            <DegreeForm />
            <Stack direction="horizontal" className="justify-content-center">
                <Stack className="mt-3" style={{ flexGrow: 0 }}>
                    <ListGroup as="ul">
                        {degree?.map((si, i) => {
                            return (
                                <ListGroupItem
                                    as="li"
                                    direction="horizontal"
                                    key={i}
                                >
                                    <strong></strong>: <span></span>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </Stack>
            </Stack>
        </>
    );
}
