
import ProductRepository from "../../domain/repository/product_repository";
import Product_Page from "../../domain/model/product_Page";
import Product_images from "../../domain/model/product_images";
import table from '../../presentation/components/images/Paste image.png'
import first from '../../presentation/components/images/First.png'
import second from '../../presentation/components/images/second.png'
import third from '../../presentation/components/images/third.png'

import dark from '../../presentation/components/images/table01.png';
import white from '../../presentation/components/images/table02.png';
import red from '../../presentation/components/images/table03.png';
import beige from '../../presentation/components/images/table04.png';


export enum Color {
    Red = 'Red',
    Black = 'Black',
    White = 'White',
    Beige = 'Beige'
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


const testImages: Product_images =
    {
        mainImage: table,
        restImages: [first,second,third],
        colorImages: [
            {
                img: dark,
                color: "dark"
            },
            {
                img: white,
                color: 'white'
            },
            {
                img: red,
                color: 'red'
            },

            {
                img: beige,
                color: 'beige'
            }
        ]
    }

export default class Product_infoFakeRepository implements ProductRepository {
    getProduct(ProductId: string): Promise<Product_Page> {
        return Promise.resolve(testProduct);
    }

    getProductImages(ProductId: string): Promise<Product_images> {
        return Promise.resolve(testImages);
    }


}




