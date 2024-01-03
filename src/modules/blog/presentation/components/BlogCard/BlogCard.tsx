import React from 'react';
import cardStyle from './BlogCard.module.css'

interface PropsArt {
    imgArt: string
    title: string
    date: string


}

const BlogCard = (props: PropsArt) => {


    return (
        <div className={cardStyle.wrapper}>
            <img alt={`img`} src={props.imgArt}></img>
            <div className={cardStyle.mainField}><p>{props.title}</p></div>
            <div className={cardStyle.dateField}><p>{props.date}</p></div>
        </div>
    );
}

export default BlogCard;