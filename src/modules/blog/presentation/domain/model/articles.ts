export default class Articles{
    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly text: string[],
        public readonly images: string[],
        public readonly date: Date,
        public readonly index: number,
        public readonly featured: boolean
    ) {
        this.title = title;
        this.author = author;
        this.text = text;
        this.images = images;
        this.date = date;
        this.index = index;
        this.featured = featured;

    }
    static fromJson (json: string): Articles {
        const art = JSON.parse(json)
        return new Articles(art.title, art.author, art.text, art.images, art.date, art.index, art.featured);
    }
}