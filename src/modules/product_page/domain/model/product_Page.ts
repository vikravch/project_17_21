import Product from "../../../shop-page/domain/model/product";


export default class Product_Page extends Product
{

    constructor(id: string, name: string, image: string,actualPrice: number | null,fullPrice: number,sale: number,description: string,isNew: boolean, rating: number,color: string,amount: number, public readonly measurements: string ) {
        super(id,
            name,
            image,
            actualPrice,
            fullPrice,
            sale,
            description,
            isNew,
            rating,
            color,
            amount);
        this.measurements = measurements;

    }

    static fromJson(json:string){
        const obj = JSON.parse(json);
        return new Product_Page(obj.productId, obj.productName, obj.image, obj.actualPrice, obj.price, obj.discount, obj.description, obj.isNew, obj.rating, obj.color, obj.amount,obj.measurements);
    }

}

