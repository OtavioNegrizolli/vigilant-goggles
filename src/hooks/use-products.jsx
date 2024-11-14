import { useContext } from "react";
import { ProductsContext } from "../context/products.context";

/**
 * @typedef Product
 * @type {{
 *  id: string | undefined,
 *  description: string,
 *  details: string,
 *  price: number,
 *  vendor: string,
 *  category: string,
 *  measurementUnity: string
 * }}
 *
 *  @typedef AddProdCallback
 *  @type {(prod:Product) => number|null}
 *
 *  @typedef GetProdCallback
 *  @type {(productId:number) => Product|null}
 *
 *  @typedef GetProdCallback
 *  @type {(productId:number) => Product|null}
 *
 *  @typedef DeleteProdCallback
 *  @type {(productId:number) => void}
 *
 * @returns {{
 *  addProduct: (Product) => number|null,
 *  deleteProducts: DeleteProdCallback,
 *  updateProduct: (Product) => void,
 *  getProduct: GetProdCallback,
 *  products: Product[]
 * }}
 */
export default function useProducts() {
    const context = useContext(ProductsContext);
    return context;
}
