const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000;

export default class Product{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly image: string,
        public readonly actualPrice: number | null,
        public readonly fullPrice: number,
        public readonly sale: number,
        public readonly description: string,
        public readonly isNew: boolean,
        public readonly rating: number,
        public readonly color: string,
        public readonly amount: number ,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.actualPrice = actualPrice;
        this.fullPrice = fullPrice;
        this.sale = sale;
        this.description = description;
        this.isNew = isNew;
        this.rating = rating;
        this.color = color;
        this.amount = amount;
    }
    static fromJson (json: string): Product {
        const obj = JSON.parse(json)
        const actualPrice = obj.discount === 0 ? null :  obj.price - (obj.price * obj.discount / 100);
        const currentData = new Date();
        const isNew = currentData.getTime() - obj.date.getTime() < millisecondsInMonth;
        return new Product(obj.productId, obj.productName, obj.image, actualPrice, obj.price, obj.discount, obj.description, isNew, obj.rating, obj.color, obj.amount);
    }
}



