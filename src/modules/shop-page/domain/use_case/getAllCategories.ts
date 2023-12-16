import FilteringFakeRepository from "../../data/repository/filteringFakeRepository";
import Category from "../model/category";


const GetAllCategories = (filteringFakeRepository: FilteringFakeRepository) => async (): Promise<Category[]> => {

    try {
        const allCategories = await filteringFakeRepository.getAllCategories();
        return allCategories || [];
    } catch (error) {
        throw error;
    }
}

export default GetAllCategories;