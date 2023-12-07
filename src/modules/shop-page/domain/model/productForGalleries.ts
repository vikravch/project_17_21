import Product from "./product";

const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000;

export default class ProductForGalleries extends Product {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly image: string,
        public readonly actualPrice: number | null,
        public readonly fullPrice: number,
        public readonly sale: number,
        public readonly description: string,
        public readonly isNew: boolean,
        public readonly rating: number,
    ) {
        super(id);
        this.name = name;
        this.image = image;
        this.actualPrice = actualPrice;
        this.fullPrice = fullPrice;
        this.sale = sale;
        this.description = description;
        this.isNew = isNew;
        this.rating = rating;
    }
    static fromJson (json: string): ProductForGalleries {
        const obj = JSON.parse(json)
        const actualPrice = obj.discount === 0 ? null :  obj.price - (obj.price * obj.discount / 100);
        const currentData = new Date();
        const isNew = currentData.getTime() - obj.date.getTime() < millisecondsInMonth;
        return new ProductForGalleries(obj.productId, obj.productName, obj.image, actualPrice, obj.price, obj.discount, obj.description, isNew, obj.rating)
    }
}



