import React from 'react';
import style from './Header.module.css';
import {img10} from "../../utils/data";

const HeaderBlog = () => {
    return (
        <div className={style.headerBlogMain}>
            <div className={style.imgBlog}>
                <img src={img10} alt={'img'}></img>
                <div className={style.textBlog}>
                    <p className={style.ourBlogText}>Our Blog</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlog;