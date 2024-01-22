import React, {MutableRefObject, useEffect} from 'react';
import style from "./shopPage.module.css";
import Sorting from "../components/sorting/Sorting";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {Columns, RequestProducts} from "../redux/types";
import {Listener} from "../int";
import {getAllSortingAsyncAction} from "../redux/asyncActions";
import {AppDispatch} from "../../../../general/redux/store";

interface Props {
    listenerObject: MutableRefObject<Listener>,
    requestObject: RequestProducts,
    setRequestObject: React.Dispatch<React.SetStateAction<RequestProducts>>,
    openCloseMenuHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const SearchPage = ({listenerObject, requestObject, setRequestObject, openCloseMenuHandler}: Props) => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
       dispatch(getAllSortingAsyncAction());
    }, []);

    return (
        <div className={style.shopPage}>
            <section className={style.pageHeader}>
                <h1>Search Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </section>
            <section className={style.filterSortBlock}>
                <h2>
                    Your search: <span>*search*</span>
                </h2>
                <Sorting
                    listenerObject={listenerObject}
                    columns={columns}
                    sorting={requestObject.filtering.sorting}
                    openCloseMenuHandler={openCloseMenuHandler}/>
            </section>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default SearchPage;