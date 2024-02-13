import {RequestProducts} from "../../presentation/redux/types";
import Product from "../../domain/model/product";

export const productsServer = 'http://localhost:3010/';
export async function getProducts(requestObject: RequestProducts): Promise<Array<Product>> {
    const stringRequest = encodeURIComponent(JSON.stringify(requestObject));
    const response = await fetch(productsServer + "products?params=" + stringRequest);
    if (response.status === 200 || response.status === 304) {
        const json = await response.json();
        console.log(json);
        return json.products.map((product: any) => Product.fromServerObject(product));
    } else {
        throw new Error("Error requesting products: " + response.status);
    }
}

