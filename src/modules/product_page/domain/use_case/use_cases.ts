
import Product_Page from "../model/product_Page";
import Product_images from "../model/product_images";


export type ProductUseCases = {
    getProduct: (productId: string) => Promise<Product_Page>,
    getProductImages:(productId:string) => Promise<Product_images>

}