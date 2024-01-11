
import Product_Page from "../model/product_Page";


export default interface ProductRepository {
    getProduct: (ProductId: string) => Promise<Product_Page>



}