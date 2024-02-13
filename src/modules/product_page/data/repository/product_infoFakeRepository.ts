
import ProductRepository from "../../domain/repository/product_repository";
import Product_Page from "../../domain/model/product_Page";
import Product_images from "../../domain/model/product_images";
import table from '../../presentation/components/images/Paste-image.webp'
import first from '../../presentation/components/images/First.webp'
import second from '../../presentation/components/images/second.webp'
import third from '../../presentation/components/images/third.webp'

import dark from '../../presentation/components/images/table01.webp';
import white from '../../presentation/components/images/table02.webp';
import red from '../../presentation/components/images/table03.webp';
import beige from '../../presentation/components/images/table04.webp';


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
        image: table,
        isNew: true,
        rating: 5,
        sale: 25,
        description: 'The greatest table you ever see in your life, buy it now or now, there is no any other choice, you should buy it!',
        measurements: '17 1/2x20 5/8',
        saleDate: new Date('02/09/2024 12:30:45')
    };


const testImages: Product_images =
    {
        imagesContainer: [table,first,second,third],
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




