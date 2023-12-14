import Product from "../model/product";
import AllFiltering from "../model/allFiltering";
import {RequestProducts} from "../../presentation/redux/types";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>,
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
    getAllFiltering: () => Promise<AllFiltering>
}