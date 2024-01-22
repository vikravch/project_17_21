import React, {MutableRefObject} from 'react';
import style from './shopPage.module.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import arrow from "../../../../images/shop_page/breadCrumbs.svg";
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import Sorting from "../components/sorting/Sorting";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {Columns, RequestProducts} from "../redux/types";
import {Listener} from "../int";
import {useAppSelector} from "../../../../general/redux/hooks";

interface Props {
    listenerObject: MutableRefObject<Listener>,
    requestObject: RequestProducts,
    setRequestObject: React.Dispatch<React.SetStateAction<RequestProducts>>,
    openCloseMenuHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const StorePage = ({listenerObject, requestObject, setRequestObject, openCloseMenuHandler}: Props) => {

    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const {categories, sort, prices} = useAppSelector(state => state.shopPage)
    const navigate = useNavigate();
    const location = useLocation();

    const setCategoryParams = (event: React.MouseEvent<HTMLElement>) => {
        const searchParams = new URLSearchParams(location.search);
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
        const searchParams = new URLSearchParams(location.search);
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
        <div className={style.shopPage}>
            <section className={style.pageHeader}>
                <div>
                    <Link to={'/home'}>Home</Link>
                    <img src={arrow} alt={'arrow'}/>
                    <p>Shop</p>
                </div>
                <h1>Shop Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </section>
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
                    listenerObject={listenerObject}
                    columns={columns}
                    category={requestObject.filtering.category}
                    price={requestObject.filtering.price}
                    setCategoryParams={setCategoryParams}
                    setPriceParams={setPriceParams}
                    openCloseMenuHandler={openCloseMenuHandler}/>
                <Sorting
                    listenerObject={listenerObject}
                    columns={columns}
                    sorting={requestObject.filtering.sorting}
                    openCloseMenuHandler={openCloseMenuHandler}/>
            </section>
            {categories && categories.length !== 0 ?
                <div className={style.categoryName}>
                    <p>{requestObject.filtering.category === null ? categories[0].title : categories?.find(obj => obj.id === requestObject.filtering.category)?.title}</p>
                </div> :
                <></>}
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject.filtering.category}
                                        price={requestObject.filtering.price}
                                        setCategoryParams={setCategoryParams}
                                        setPriceParams={setPriceParams}/>}
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default StorePage;