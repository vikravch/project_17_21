export type Product = {
    id: number,
    name: string,
    image: string,
    description: string,
    actualPrice: number,
    fullPrice: number,
    sale: number | null,
    new: boolean,
    rating: number
}
export type Columns = {
    countDesktop: 4 | 3 | 2,
    countMobile: 2 | 1
}