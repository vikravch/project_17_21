import Product from "../model/product";

export default interface ProductsRepository {
    getAllProducts: () => Promise<Product[]>
}