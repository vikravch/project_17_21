import React, {useState} from 'react';
import blogStyle from './Blog.module.css';
import {Article, articles} from "../presentation/utils/data";
import BlogCard from "../presentation/components/BlogCard/BlogCard";
import {Link} from "react-router-dom";

const Blog = () =>
{
    const [count, setCount] = useState(9);

let array: Article[] = articles;
let temp: Article[] = count<array.length? array.slice(0, count): array.slice(0, array.length);


    return (<div className={blogStyle.blogWrapper}>
        {temp.map((item) =><div className={blogStyle.wrapper}><Link className={blogStyle.wrapper} to={"/blog/article"}><BlogCard imgArt={item.src} text={item.text} date={item.date} ></BlogCard></Link></div>)}
    <div className={blogStyle.wrapperBtn}><button className={blogStyle.btnMore} onClick={() => setCount(count + 3)}>Show more</button></div>
    </div>);
};

export default Blog;