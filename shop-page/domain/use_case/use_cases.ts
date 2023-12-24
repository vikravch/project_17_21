import Product from "../model/product";
import {RequestProducts} from "../../presentation/redux/types";
import Category from "../model/category";
import Price from "../model/price";
import Sort from "../model/sort";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>,
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
}

export type FilteringUseCases = {
    getAllCategories: () => Promise<Category[]>
    getAllPrices: () => Promise<Price[]>
    getAllSorting: () => Promise<Sort[]>
}