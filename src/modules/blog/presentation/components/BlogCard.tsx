import React from 'react';
import '../styles/style.css'
interface Props
{
    imgArt: string
    text: string
    date: string
}
const BlogCard = (props: Props) => {


            return (
                <div className={'wrapper'}>
                    <div className={'articleImg'}>
                        <img src={props.imgArt }></img>
                    </div>
                    <div className={'mainField'}><p>{props.text}</p></div>
                    <div className={'dateField'}><p>{props.date}</p></div>
                </div>
            );
        }

export default BlogCard;