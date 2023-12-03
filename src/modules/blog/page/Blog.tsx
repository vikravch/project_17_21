import React, {useEffect, useState} from 'react';
import blogStyle from './Blog.module.css';
import cardStyle from '../presentation/components/BlogCard/BlogCard.module.css';
import {Article, articles} from "../presentation/utils/data";
import BlogCard from "../presentation/components/BlogCard/BlogCard";
import {Link} from "react-router-dom";
import ViewSelector from '../../shop-page/presentation/components/view-selector/ViewSelector';
import {useSelector} from "react-redux";
import {AppStore} from "../../../general/redux/types";
import {Columns} from "../../shop-page/presentation/redux/types";
import HeaderBlog from "../presentation/components/OurBlog/HeaderBlog";

const Blog = () =>
{

    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [count, setCount] = useState(9);
    let allCard = document.getElementsByClassName(blogStyle.wrapper);
    let cards = document.getElementsByClassName(cardStyle.wrapper);
let array: Article[] = articles;
let temp: Article[] = count<array.length? array.slice(0, count): array.slice(0, array.length);

    useEffect(()=>
    {
        for(let i=0;i<allCard.length;i++)
        {
            if (columns.countDesktop===2)
            {
               allCard[i].setAttribute('style', 'width: 500px');
                cards[i].setAttribute('style', 'width: 450px')
            }
            else if(columns.countDesktop===3)
            {
                allCard[i].setAttribute('style', 'width: 357px')
                cards[i].setAttribute('style', 'width: 327px')
            }
            else if(columns.countDesktop===4)
            {
                allCard[i].setAttribute('style', 'width: 300px')
                cards[i].setAttribute('style', 'width: 327px')
            }
        }
            })


    return <div className={blogStyle.blogWrapper}>
        <HeaderBlog/>
        <div className={blogStyle.filterBlog}>
            <select>
                <option>All blog</option>
                <option>Featured</option>
            </select>
        </div>
        <div className={blogStyle.blogSelector}><div className={blogStyle.blocSelector}><p>All blog</p><p>Featured</p></div>
            <div className={blogStyle.blocSelector}><div ><span>Sort by</span><select></select></div><div className={blogStyle.viewStyle}><ViewSelector/></div></div></div>
        <div className={blogStyle.blogWrapper}>
        {temp.map((item) =><Link className={blogStyle.wrapper} to={"/blog/article"}><BlogCard imgArt={item.src} text={item.text} date={item.date} ></BlogCard></Link>)}
        </div>
        <div className={blogStyle.wrapperBtn}><button className={blogStyle.btnMore} onClick={() => setCount(count + 3)}>Show more</button></div>

    </div>
};

export default Blog;