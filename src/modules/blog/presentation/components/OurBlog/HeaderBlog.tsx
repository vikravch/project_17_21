import React from 'react';
import style from './Header.module.css';
import {img10} from "../../utils/data/data";
import {Link} from "react-router-dom";


const HeaderBlog = () => {
    return (
        <div className={style.headerBlogMain}>
            <div className={style.imgBlog}>
                <img className={style.image} src={img10} alt={'img'}></img>
                <div className={style.textBlog}>
                    <div className={style.bread}><Link className={style.breadHome} to={"/home"}>Home {'> '}</Link><p className={style.breadBlog}> Blog</p></div>
                    <p className={style.ourBlogText}>Our Blog</p>
                    <p className={style.headerText}>Home ideas and design inspiration</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlog;