export function Header({title}) {
    return (
        <div className="d-flex">
            <div className="w-100">
                <h3 className="mb-4">{title}</h3>
            </div>
            <div className="w-100">
                <p className="social-media d-flex justify-content-end">
                    <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                    >
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}
