
import ProductRepository from "../../domain/repository/product_repository";
import Product_Page from "../../domain/model/product_Page";


export enum Color {
    Red = 'Red',
    Black = 'Black',
    White = 'White'
}


const testProduct: Product_Page =
    {
        id: '3322bb',
        amount: 12,
        color: Color.Black,
        name: 'Table',
        actualPrice: 100,
        fullPrice: 75,
        image:'',
        isNew: true,
        rating: 5,
        sale: 25,
        description: 'The greatest table you ever see in your life, buy it now or now, there is no any other choice, you should buy it!',
        measurements: '17 1/2x20 5/8'
    };

export default class Product_infoFakeRepository implements ProductRepository {
    getProduct(ProductId: string): Promise<Product_Page> {
        return Promise.resolve(testProduct);
    }


}




