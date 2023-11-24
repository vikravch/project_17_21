import React from 'react';
import style from './ViewSelector.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns} from "../../redux/types";
import {selectDesktopStyle, selectMobileStyle} from "../../redux/galleriesStyleSlice";
import SvgStyle1 from "./images/SvgStyle1";
import SvgStyle2 from "./images/SvgStyle2";
import SvgStyle3 from "./images/SvgStyle3";
import SvgStyle4 from "./images/SvgStyle4";

const ViewSelector = () => {
    const dispatch = useDispatch();
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    return (
        <div className={style.viewSelector}>
            <div className={`${style.button} ${style.desktop} ${columns.countDesktop === 4 ? style.active : ''}`}
                 onClick={() => dispatch(selectDesktopStyle(4))}>
                <SvgStyle4/>
            </div>
            <div className={`${style.button} ${style.desktop} ${columns.countDesktop === 3 ? style.active : ''}`}
                 onClick={() => dispatch(selectDesktopStyle(3))}>
                <SvgStyle3/>
            </div>
            <div
                className={`${style.button} ${style.desktop} ${style.last} ${columns.countDesktop === 2 ? style.active : ''}`}
                onClick={() => dispatch(selectDesktopStyle(2))}>
                <SvgStyle2/>
            </div>
            <div className={`${style.button} ${style.mobile} ${columns.countMobile === 2 ? style.active : ''}`}
                 onClick={() => dispatch(selectMobileStyle(2))}>
                <SvgStyle2/>
            </div>
            <div
                className={`${style.button} ${style.mobile} ${style.last} ${columns.countMobile === 1 ? style.active : ''}`}
                onClick={() => dispatch(selectMobileStyle(1))}>
                <SvgStyle1/>
            </div>
        </div>
    );
};

export default ViewSelector;