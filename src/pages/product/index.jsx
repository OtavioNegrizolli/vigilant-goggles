import { Outlet } from "react-router-dom";
import { ProductsProvider } from "../../context/products.context";

export function ProductsLayout() {
    // TODO products context?
    return <>
        <ProductsProvider>
            <Outlet />
        </ProductsProvider>
    </>;
}


import ProductForm from "./form";
import ProductsList from "./list";
export {
    ProductForm,
    ProductsList
}
