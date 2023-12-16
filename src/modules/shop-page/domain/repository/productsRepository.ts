import Product from "../model/product";
import {RequestProducts} from "../../presentation/redux/types";

export default interface ProductsRepository {
    getAllProducts: () => Promise<Product[]>
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
}