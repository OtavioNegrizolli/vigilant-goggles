import { useCallback, useEffect, useState } from "react";
import { Stack, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductRow from "./product-row.jsx";
import useProducts from "../../../hooks/use-products.jsx";

export default function ProductsList() {
    const { products, deleteProduct } = useProducts();

    const handleDelete = useCallback(
        (id) => {
            if (window.confirm("Certeza que deseja excluir?")) {
                deleteProduct(id);
            }
        },
        [products]
    );

    return (
        <>
            <Stack direction="vertical">
                <Stack direction="horizontal" className="justify-content-between py-3">
                    <h1 className="h4">Produtos</h1>
                    <Link
                        className="btn blue-bg"
                        to="new"
                    >
                        Novo
                        <i className="ms-1 fa-solid fa-plus"></i>
                    </Link>
                </Stack>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length ? (
                            products.map((p, i) => {
                                return (
                                    <ProductRow
                                        prod={p}
                                        key={i}
                                        onDelete={handleDelete}
                                    />
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    Não foi encontrado nada
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Stack>
        </>
    );
}
