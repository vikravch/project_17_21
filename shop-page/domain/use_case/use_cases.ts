import Product from "../model/product";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>
}