export function SubmitButton({ label }) {
    return (
        <div className="form-group">
            <button
                type="submit"
                style={{ height: "48px" }}
                className="w-100 p-2 btn btn-primary rounded submit"
            >
                {label}
            </button>
        </div>
    );
}
