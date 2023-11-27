import React from 'react';
import articleStyle from './Article.module.css';
import {articles, img2, img3} from "../../utils/data";
import BlogAlso from "../BlogAlso/BlogAlso";


const Article = () => {
    return (
        <div className={articleStyle.articleWrapper}>
            <div className={articleStyle.articleHead}>
                <h2>'Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div className={articleStyle.authorArt}>
                    <span>Henrik Annemark</span>
                    <span>October 16, 2023</span>
                </div>
            </div>

              <img alt={'img'} src={articles[0].src}></img>
            <div>
                <p> Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>
                <h3>A cleaning hub with built-in ventilation</h3>
                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>
            </div>
            <img alt={'img'} src={img2}></img>
            <div>
                <h3> Storage with a calming effect</h3>
                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>
                <h3>Kit your clutter for easy access</h3>
                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>
            </div>
            <img alt={'img'} src={img3}></img>
            <h3> Make your mop disappear </h3>
            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>
            <div>
                <BlogAlso/>
            </div>
        </div>
    );
};

export default Article;