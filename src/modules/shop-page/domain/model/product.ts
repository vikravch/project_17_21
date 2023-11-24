export default class Product {
    constructor (
        public readonly id: number,
        public readonly name: string,
        public readonly image: string,
        public readonly actualPrice: number,
        public readonly fullPrice: number,
        public readonly description: string,
        public readonly sale: number | null,
        public readonly isNew: boolean,
        public readonly rating: number,
    ) {}

    static fromJson (json: string): Product {
        const obj = JSON.parse(json)
        return new Product(obj.id, obj.name, obj.image, obj.actualPrice, obj.fullPrice, obj.description, obj.sale, obj.isNew, obj.rating)
    }
}