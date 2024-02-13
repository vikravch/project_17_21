import {RequestProducts, ResponseProducts} from "../../presentation/redux/types";

export default interface ProductsRepository {
    getAllProducts: () => Promise<ResponseProducts>
    getProducts: (requestObject: RequestProducts) => Promise<ResponseProducts>
}