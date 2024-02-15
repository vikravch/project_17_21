import {RequestProducts, ResponseProducts} from "../../presentation/redux/types";
import Category from "../model/category";
import Price from "../model/price";
import Sort from "../model/sort";

export type ProductsUseCases = {
    getAllProducts: () => Promise<ResponseProducts>,
    getProducts: (requestObject: RequestProducts) => Promise<ResponseProducts>
}

export type FilteringUseCases = {
    getAllCategories: () => Promise<Category[]>
    getAllPrices: () => Promise<Price[]>
    getAllSorting: () => Promise<Sort[]>
}