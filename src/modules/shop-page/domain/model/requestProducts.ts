export default class RequestProducts {
    constructor (
        public category: null | string,
        public price: null | string,
        public sorting: null | string,
        public page: number
    ) {}
}