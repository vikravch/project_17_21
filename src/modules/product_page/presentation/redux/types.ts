
import Product_Page from "../../domain/model/product_Page";
import Product_images from "../../domain/model/product_images";


export type ProductState = {
    product?: Product_Page,
    productImages?: Product_images,
    error: string
}

// export type ProductImagesState={
//     productImages?: Product_images,
//     error: string
// }