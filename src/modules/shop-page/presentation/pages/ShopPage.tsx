import React, {useEffect, useRef, useState} from 'react';
import {RequestProducts} from "../redux/types";
import constStyle from "./utils/const.module.css";
import {Listener} from "../int";
import SearchPage from "./SearchPage";
import StorePage from "./StorePage";



const ShopPage = () => {

    const listenerObject = useRef<Listener>({
        listenerHead: [],
        listener: []
    });
    const [requestObject, setRequestObject] = useState<RequestProducts>({
        filtering: {
            category: null,
            price: null,
            sorting: null,
        },
        page: 1
    })

    useEffect(() => {
        document.addEventListener('click', closeClickFunction);
        return () => document.removeEventListener('click', closeClickFunction);
    }, []);

    const closeClickFunction = (event: MouseEvent) => {

        listenerObject.current.listener.forEach((item, index) => {
            if (item !== null && event.target !== item && event.target !== listenerObject.current.listenerHead[index]) {
                item?.classList.remove(constStyle.open);
            }
        })

    }

    const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as Element;
        const nextSibling = eventTarget.nextElementSibling as Element;
        nextSibling.classList.toggle(constStyle.open);
    }

    useEffect(() => {

    }, [])

    const whichSpace = () => {
        return window.location.pathname === "/shop"
            ? <StorePage listenerObject={listenerObject}
                         requestObject={requestObject}
                         setRequestObject={setRequestObject}
                         openCloseMenuHandler={openCloseMenuHandler}/>
            : <SearchPage listenerObject={listenerObject}
                          requestObject={requestObject}
                          setRequestObject={setRequestObject}
                          openCloseMenuHandler={openCloseMenuHandler}/>;
    }

    return (
        <div>
            {whichSpace()}
        </div>
    );
};

export default ShopPage;