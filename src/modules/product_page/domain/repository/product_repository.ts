
import Product_Page from "../model/product_Page";
import Product_images from "../model/product_images";


export default interface ProductRepository {
    getProduct: (ProductId: string) => Promise<Product_Page>,
    getProductImages: (ProductId: string) => Promise<Product_images>



}