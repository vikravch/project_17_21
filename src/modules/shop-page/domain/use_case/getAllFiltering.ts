import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import {AllFilteringInterface} from "../model/interfaces";

const GetAllFiltering = (productsFakeRepository: ProductsFakeRepository) => async (): Promise<AllFilteringInterface> => {

    try {
        const allFiltering = await productsFakeRepository.getAllFiltering();
        return allFiltering || {};
    } catch (error) {
        throw error;
    }
}

export default GetAllFiltering;
