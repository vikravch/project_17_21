import RequestProducts from "../model/requestProducts";
import Product from "../model/product";
import {AllFilteringInterface} from "../model/interfaces";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>,
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
    getAllFiltering: () => Promise<AllFilteringInterface>
}