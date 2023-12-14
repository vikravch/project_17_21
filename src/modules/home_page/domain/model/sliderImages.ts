export default class SliderImages{

    constructor(
        public readonly name:string,
        public readonly image:string,
        public readonly alt:string
        ) {}

    static fromJson (json: string): SliderImages {
        const obj = JSON.parse(json)
        return new SliderImages(obj.name, obj.image, obj.alt)
    }
}