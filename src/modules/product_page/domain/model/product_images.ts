export default class Product_images {

    constructor(
        public readonly imagesContainer: string[],
        public readonly colorImages: {
            img: string,
            color: string
        }[]
    ) {
        this.imagesContainer = imagesContainer;
    }

    static fromJson(json: string) {
        const obj = JSON.parse(json);
        return new Product_images(obj.imagesContainer, obj.colorImages);
    }
}