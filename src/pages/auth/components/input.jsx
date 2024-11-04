import { forwardRef } from "react";

export const Input = forwardRef(function Input(
    { label, placeholder, htmlFor, value, onChange, ...props },
    ref
) {
    if (!ref && !value && !onChange) {
        throw "Gimme a ref o a state";
    }
    // console.log(ref, value, onChange);

    return (
        <div className="form-group mb-3">
            <label className="label" htmlFor={htmlFor}>
                {label}
            </label>
            {ref ? (
                <input
                    className="form-control"
                    ref={ref}
                    placeholder={placeholder || label}
                    {...props}
                />
            ) : (
                <input
                    className="form-control"
                    placeholder={placeholder || label}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            )}
        </div>
    );
});
