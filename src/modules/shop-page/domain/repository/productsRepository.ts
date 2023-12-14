import Product from "../model/product";
import {AllFilteringInterface} from "../model/interfaces";
import {RequestProducts} from "../../presentation/redux/types";

export default interface ProductsRepository {
    getAllProducts: () => Promise<Product[]>
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
    getAllFiltering: () => Promise<AllFilteringInterface>;
}