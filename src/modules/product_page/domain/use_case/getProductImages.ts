import ProductRepository from "../repository/product_repository";
import Product_images from "../model/product_images";


const GetProductImages = (
    productRepository: ProductRepository,
) => async (productCode: string) : Promise<Product_images> => {
    try {
        const res = await productRepository.getProductImages(productCode);
        if(res === null){
            throw Error('Product is not found, please try again');
        }
        return res;
    } catch (e) {
        throw e;
    }
}

export default GetProductImages;