import RequestProducts from "../model/requestProducts";
import Product from "../model/product";

export default interface ProductsRepository {
    getAllProducts: () => Promise<Product[]>
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
}