import ExtensionCourseForm from "./extension-course-form";

export default function ExtensionCourseSection() {
    return (
        <div>
            <ExtensionCourseForm />
            <Stack direction="horizontal" className="justify-content-center">
                <Stack className="mt-3" style={{ flexGrow: 0 }}>
                    <ListGroup as="ul" >
                        {socialInfo?.map((si, i) => {
                            return (
                                <ListGroupItem as="li" direction="horizontal" key={i}>
                                    <strong>{opt[si.type]}</strong>:{" "}
                                    <span>{si.value}</span>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </Stack>
            </Stack>
        </div>
    );
}
