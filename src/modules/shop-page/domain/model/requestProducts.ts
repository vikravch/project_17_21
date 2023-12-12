export default class RequestProducts {
    constructor (
        public category: string | null,
        public price: string | null,
        public sorting: string | null,
        public page: number
    ) {}
}