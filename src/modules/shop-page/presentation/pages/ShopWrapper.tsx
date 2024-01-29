import React, {ReactNode, useEffect, useRef} from 'react';
import constStyle from "./utils/const.module.css";
import {Listener} from "../int";
import {Link} from "react-router-dom";
import style from "./shopPage.module.css";
import arrow from "../../../../images/shop_page/breadCrumbs.svg";

type Props = {
    children: ReactNode;
    title: string
}

const ShopWrapper: React.FC<Props> = ({children, title}) => {
    const listenerObject = useRef<Listener>({
        listenerHead: [],
        listener: []
    });

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

    const clonedChild = React.cloneElement(children as React.ReactElement,
        {listenerObject, openCloseMenuHandler}
    );

    return (
        <div className={style.shopPage}>
            <section className={style.pageHeader}>
                <div>
                    <Link to={'/home'}>Home</Link>
                    <img src={arrow} alt={'arrow'}/>
                    <p>{title}</p>
                </div>
                <h1>{title} Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </section>
            {clonedChild}
        </div>
    );
};

export default ShopWrapper;