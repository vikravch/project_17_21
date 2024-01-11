

export default class Product_images{

    constructor(
        public readonly mainImage: string,
        public readonly restImages: string[]
        ) {
        this.mainImage = mainImage;
        this.restImages = restImages;
    }

    static fromJson(json:string){
        const obj = JSON.parse(json);
        return new Product_images(obj.mainImage, obj.restImages);
    }
}