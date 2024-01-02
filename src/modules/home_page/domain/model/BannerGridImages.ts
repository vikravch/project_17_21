export default class BannerGridImages{

    constructor(
        public readonly name:string,
        public readonly category:string,
        public readonly image:string,
        public readonly alt:string
    ) {}

    static fromJson (json: string): BannerGridImages {
        const obj = JSON.parse(json)
        return new BannerGridImages(obj.name, obj.category, obj.image, obj.alt)
    }
}