import { Link } from "react-router-dom";

export default function ProductRow({ prod, onDelete }) {
    return (
        <tr>
            <th>{prod.id}</th>
            <th>{prod.description}</th>
            <th>{prod.price}</th>
            <th>
                <a
                    href="javascript:void(0)"
                    role="button"
                    onClick={(_) => onDelete(prod.id)}
                >
                    <i className="fa-solid fa-trash text-danger"></i>
                </a>
                &nbsp;
                <Link to={`./${prod.id}`}>
                    <i className="fa-solid fa-pencil text-primary"></i>
                </Link>
            </th>
        </tr>
    );
}
