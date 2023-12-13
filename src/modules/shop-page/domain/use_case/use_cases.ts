import RequestProducts from "../model/requestProducts";
import Product from "../model/product";
import Category from "../model/category";

export type ProductsUseCases = {
    getAllProducts: () => Promise<Product[]>,
    getProducts: (requestObject: RequestProducts) => Promise<Product[]>
}

export type CategoriesUseCases = {

    getAllCategories: () => Promise<Category[]>

}