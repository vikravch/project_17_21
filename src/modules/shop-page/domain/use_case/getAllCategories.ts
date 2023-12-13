import CategoryFakeRepository from "../../data/repository/categoryFakeRepository"
import Category from "../model/category";

const GetAllCategories = (categoryFakeRepository: CategoryFakeRepository) => async (): Promise<Category[]> => {

    try {
        const allCategories = await categoryFakeRepository.getAllCategories();
        return allCategories || [];
    } catch (error) {
        throw error;
    }
}

export default GetAllCategories;
