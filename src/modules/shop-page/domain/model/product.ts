export default class Product {
    constructor (
        public readonly id: string,
    ) {}

    static fromJson (json: string): Product {
        const obj = JSON.parse(json);
        return new Product(obj.productId);
    }
}



