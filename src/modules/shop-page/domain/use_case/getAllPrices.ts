import FilteringFakeRepository from "../../data/repository/filteringFakeRepository";
import Price from "../model/price";

const GetAllPrices = (filteringFakeRepository: FilteringFakeRepository) => async (): Promise<Price[]> => {
    try {
        const allPrices = await filteringFakeRepository.getAllPrices();
        return allPrices || [];
    }
    catch (error) {
        throw error;
    }
}

export default GetAllPrices;