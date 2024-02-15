import React from 'react';
import style from './shopPage.module.css';
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import Sorting from "../components/sorting/Sorting";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ChildrenProps, Columns, RequestProducts, RequestShopProducts} from "../redux/types";
import {useAppSelector} from "../../../../general/redux/hooks";
import {getAllCategoriesAsyncAction, getAllPricesAsyncAction, getAllSortingAsyncAction} from "../redux/asyncActions";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useShopWrapperLogic} from "./utils/useShopWrapperLogic";
import {useNavigate} from "react-router-dom";

const ShopPage: React.FC<ChildrenProps> = ({listenerObject,openCloseMenuHandler}) => {
    const columns = useSelector<AppStore, Columns>(state => state.galleriesStyle);
    const navigate = useNavigate();
    const { categories, sort, prices } = useAppSelector(state => state.shopPage);
    const { requestObject, setRequestObject, searchParams } = useShopWrapperLogic<RequestShopProducts>({
        initialRequestObject: {
            filtering: {
                category: null,
                price: null,
                sorting: null,
            },
            page: 1,
        },
        apiActions: [
            getAllCategoriesAsyncAction,
            getAllPricesAsyncAction,
            getAllSortingAsyncAction,
        ],
        updateRequestObject: (currentState, searchParams) => {
            let updatedRequestObject: RequestProducts = { ...currentState };
            for (let key in currentState.filtering) {
                if (searchParams.has(key)) {
                    const value = searchParams.get(key);
                    const item =
                        key === 'category'
                            ? categories?.find(item => item.title.toLowerCase().replace(' ', '') === value)
                            : key === 'price'
                                ? prices?.find(item => item.title.replace(/\$|\.00/g, '') === value)
                                : sort?.find(item => item.title.toLowerCase().replace(' ', '') === value);
                    updatedRequestObject.filtering[key as keyof typeof currentState.filtering] = item?.id ?? null;
                } else {
                    updatedRequestObject.filtering[key as keyof typeof currentState.filtering] = null;
                }
            }
            updatedRequestObject.page = 1;
            return updatedRequestObject;
        },
    });

    const setCategoryParams = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.categoryId as string;

        if (categories && +choice === categories[0].id) {
            searchParams.delete('category');
        } else {
            searchParams.set(
                'category',
                categories?.find(obj => String(obj.id) === choice)?.title
                    .replaceAll(' ', '').toLowerCase() as string
            );
        }
        navigate(`?${searchParams.toString()}`);
    }

    const setPriceParams = (event: { target: any; }) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.priceId as string;

        if (prices && +choice === prices[0].id) {
            searchParams.delete('price');
        } else {
            searchParams.set('price',
                prices?.find(obj => String(obj.id) === choice)?.title.replace(/[$+ ]|\.00/g, '').toLowerCase() as string
            );
        }
        navigate(`?${searchParams.toString()}`);
    }

    return (
        <>
            <section className={style.filterSortBlock}>
                <div
                    className={`${style.filterAndNameDisplay3} ${columns.countDesktop !== 3 && style.filterAndNameHide}`}>
                    <FilterTitle columns={columns}/>
                    {columns.countDesktop === 3 &&
                        <div className={style.categoryNameDesktop3}>
                            <p>All rooms</p>
                        </div>}
                </div>
                <FilterTypes
                    listenerObject={listenerObject!}
                    columns={columns}
                    category={requestObject!.filtering.category}
                    price={requestObject!.filtering.price}
                    setCategoryParams={setCategoryParams}
                    setPriceParams={setPriceParams}
                    openCloseMenuHandler={openCloseMenuHandler!}/>
                <Sorting
                    listenerObject={listenerObject!}
                    columns={columns}
                    sorting={requestObject!.filtering.sorting}
                    openCloseMenuHandler={openCloseMenuHandler!}/>
            </section>
            {
                categories && categories.length !== 0 ?
                    <div className={style.categoryName}>
                        <p>{requestObject!.filtering.category === null ? categories[0].title : categories?.find(obj => obj.id === requestObject!.filtering.category)?.title}</p>
                    </div> :
                    <></>
            }
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject!.filtering.category}
                                        price={requestObject!.filtering.price}
                                        setCategoryParams={setCategoryParams}
                                        setPriceParams={setPriceParams}/>}
                <ProductsGallery setRequestObject={setRequestObject}/>
            </section>
        </>
    )
        ;
};

export default ShopPage;