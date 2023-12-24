import FilteringFakeRepository from "../../data/repository/filteringFakeRepository";
import Sort from "../model/sort";

const GetAllSorting = (filteringFakeRepository: FilteringFakeRepository) => async (): Promise<Sort[]> => {
    try {
        const allSorting = await filteringFakeRepository.getAllSorting();
        return allSorting || [];
    }
    catch (error) {
        throw error;
    }
}

export default GetAllSorting;