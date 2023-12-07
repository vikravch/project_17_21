export default class RequestProducts {
    constructor (
        public category: string,
        public price: string,
        public sorting: string,
        public page: number
    ) {}
}