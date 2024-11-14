import { useEffect, useState, createContext, useCallback } from "react";

// import jwt from "jsonwebtoken";

const PRODUCTS_DATA_KEY = "products.data.key";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    /**
     * @type {[{ id: number }[], Function]}
     */
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage?.getItem(PRODUCTS_DATA_KEY);
        if (storedProducts) {
            const parsedUserData = JSON.parse(storedProducts);
            setProducts(parsedUserData);
        }
        return () => {
            localStorage?.setItem(PRODUCTS_DATA_KEY, JSON.stringify(products));
        };
    }, []);

    const addProduct = useCallback(
        (product) => {
            if (product != null) {
                product.id = products.at(-1)?.id + 1 || 1;
                const newProdList = [...products, product];
                setProducts(newProdList);
                return product.id;
            }
            return null;
        },
        [products]
    );

    const updateProduct = useCallback(
        (product) => {
            if (product != null) {
                console.log(products);
                console.log(product);
                const i = products?.findIndex((p) => p.id == product.id);
                console.log(i);
                if (i > -1) {
                    products.splice(i, 1, product);
                    setProducts([...products]);
                }
            }
        },
        [products]
    );

    const getProduct = useCallback(
        (id) => {
            return products?.find((p) => p.id == id);
        },
        [products]
    );

    const deleteProduct = useCallback(
        (product) => {
            if (product != null) {
                const searchhFor = product?.id ?? product;
                const newProdList = products.filter((p) => p.id != searchhFor);
                console.log(product, products, newProdList);
                setProducts(newProdList);
            }
        },
        [products]
    );

    return (
        <ProductsContext.Provider
            value={{
                addProduct,
                deleteProduct,
                getProduct,
                updateProduct,
                products,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}
