import ProductsRepository from "../../domain/repository/productsRepository";
import {RequestProducts, ResponseProducts} from "../../presentation/redux/types";
import * as Api from "../remote/api";

export default class ProductsExpressRepository implements ProductsRepository {
    async getProducts(requestObject: RequestProducts): Promise<ResponseProducts> {
        return await Api.getProducts(requestObject);
    }

    async getAllProducts(): Promise<ResponseProducts> {
        const requestObject: RequestProducts= {
            filtering: {
                category: null,
                price: null,
                sorting: null,
            },
            page: null
        }
        return await Api.getProducts(requestObject);
    }
}