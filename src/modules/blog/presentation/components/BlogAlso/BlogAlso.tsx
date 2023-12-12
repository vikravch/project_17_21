import React from 'react';
import alsoStyle from './BlogAlso.module.css';
import {Article, articles} from "../../utils/data";
import blogStyle from "../../../page/Blog.module.css";
import {Link} from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import ArrowArt from "../../utils/icons/ArrowArt";

const BlogAlso = () => {

    let arrayMore: Article[] = articles;
    arrayMore.sort(() => Math.random() - 0.5);
    let tempMore: Article[] = arrayMore.slice(0, 3);


    return (
        <div className={alsoStyle.wrapperAlso}>
            <div className={alsoStyle.headerAlso}>
                <p className={alsoStyle.alsoMain}>You might also like</p>
                <Link to={"/blog"} className={alsoStyle.moreAlso}><div>More articles</div> <div className={alsoStyle.arrow}><ArrowArt/></div></Link>
            </div>
            <div className={alsoStyle.cardsAlso}>
                {tempMore.map((item) =><div className={blogStyle.wrapper}><Link className={blogStyle.wrapper} to={"/blog/article"}><BlogCard imgArt={item.src} text={item.text} date={item.date} ></BlogCard></Link></div>)}
            </div>
        </div>
    );
};

export default BlogAlso;