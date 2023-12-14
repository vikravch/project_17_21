import RequestProducts from "../model/requestProducts";
import Product from "../model/product";
import {AllFilteringInterface} from "../model/interfaces";

export default interface ProductsRepository {
    getAllProducts: () => Promise<Product[]>
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
    getAllFiltering: () => Promise<AllFilteringInterface>;
}