import RequestProducts from "../model/requestProducts";
import Product from "../model/product";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>,
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
}