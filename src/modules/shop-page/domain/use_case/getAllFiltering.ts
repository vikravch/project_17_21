import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import AllFiltering from "../model/allFiltering";

const GetAllFiltering = (productsFakeRepository: ProductsFakeRepository) => async (): Promise<AllFiltering> => {

    try {
        const allFilteringObj = await productsFakeRepository.getAllFiltering();
        return allFilteringObj || {};
    } catch (error) {
        throw error;
    }
}

export default GetAllFiltering;
