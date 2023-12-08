import Product from "./product";
export default class ProductForCart extends Product {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly image: string,
        public readonly price: number,
        public readonly color: string,
        public quantity: number,
    ) {
        super(id);
        this.name = name;
        this.image = image;
        this.price = price;
        this.color = color;
        this.quantity = quantity;
    }
    static fromJson (json: string): ProductForCart {
        const obj = JSON.parse(json)
        return new ProductForCart(obj.productId, obj.productName, obj.image, obj.price, obj.color, obj.quantity);
    }
}



