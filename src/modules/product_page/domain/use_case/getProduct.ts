import ProductRepository from "../repository/product_repository";
import Product_Page from "../model/product_Page";


const GetProduct = (
    productRepository: ProductRepository,
) => async (productCode: string): Promise<Product_Page> => {
    try {
        const res = await productRepository.getProduct(productCode)
        if(res === null || res.id === undefined){
            throw Error('Product is not found, please try again');
        }
        return res;
    } catch (e) {
        throw e;
    }
};

export default GetProduct;