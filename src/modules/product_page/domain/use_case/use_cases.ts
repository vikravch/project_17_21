import Product from "../../../shop-page/domain/model/product";


export type ProductUseCases = {
    getProduct: (productId: string) => Promise<Product>

}