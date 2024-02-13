import Product from "../../domain/model/product";
import Price from "../../domain/model/price";
import Category from "../../domain/model/category";
import Sort from "../../domain/model/sort";
import React, {MutableRefObject} from "react";
import {Listener} from "../int";

export type ShopPageState = {
    products?: Product[],
    categories?: Category[],
    prices?: Price[],
    sort?: Sort[],
    error: string
}
export type Columns = {
    countDesktop: 4 | 3 | 2,
    countMobile: 2 | 1
}

export type RequestShopProducts = {
    filtering: {
        category: number | null,
        price: number | null,
        sorting: number | null,
    }
    page: number | null
}

export type RequestSearchProducts = {
    filtering: {
        sorting: number | null,
        search: string | null
    }
    page: number
}

export type RequestProducts = RequestSearchProducts | RequestShopProducts

export type ChildrenProps = {
    listenerObject?: MutableRefObject<Listener>,
    openCloseMenuHandler?: (event: React.MouseEvent<HTMLElement>) => void
}
