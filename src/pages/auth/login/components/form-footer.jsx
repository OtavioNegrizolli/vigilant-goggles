import { forwardRef } from "react";

export const FormFooter = forwardRef(function FormFooter(_, ref) {
    return (
        <div className="form-group d-md-flex">
            <div className="w-50 text-left">
                <label className="checkbox-wrap checkbox-primary mb-0 ">
                    Lembre de mim
                    <input type="checkbox" className="d-none" ref={ref} />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="w-50 text-right">
                <a href="#">Esqueceu a senha?</a>
            </div>
        </div>
    );
});
