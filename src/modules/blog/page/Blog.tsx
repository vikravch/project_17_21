import React, {useState} from 'react';
import '../presentation/styles/style.css'
import {Article, articles} from "../presentation/utils/constants";
import BlogCard from "../presentation/components/BlogCard";

const Blog = () =>
{
    const [count, setCount] = useState(9);

let array: Article[] = articles;
let temp: Article[] = count<array.length? array.slice(0, count): array.slice(0, array.length);


    return (<div className={'blogWrapper'}>
        {temp.map((item) =><div className={'wrapper'}><BlogCard imgArt={item.src} text={item.text} date={item.date}></BlogCard></div>)}
    <div className={'wrapperBtn'}><button className={'btnMore'} onClick={() => setCount(count + 3)}>Show more</button></div>
    </div>);
};

export default Blog;