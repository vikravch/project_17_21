import Category from "../model/category";
import Price from "../model/price";
import Sort from "../model/sort";

export default interface FilteringRepository {
    getAllCategories: () => Promise<Category[]>;
    getAllPrices: () => Promise<Price[]>;
    getAllSorting: () => Promise<Sort[]>;
}