import Category from "../model/category";

export default interface CategoryRepository {
    getAllCategories: () => Promise<Category[]>;
}