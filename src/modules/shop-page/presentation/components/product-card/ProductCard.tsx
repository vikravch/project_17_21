import React from 'react';
import Badge from './badge/Badge';
import style from './ProductCard.module.css';
import {Columns} from "../../redux/types";
import ProductForGalleries from "../../../domain/model/productForGalleries";

interface Props {
    product: ProductForGalleries,
    columns: Columns
}
const ProductCard = ({columns, product}: Props) => {
    let ratingIcons: string[] = [];
    for (let i = 0; i < product.rating; i++) {
        ratingIcons.push('★');
    }
    for (let i = 4; i >= product.rating; i--) {
        ratingIcons.push('☆');
    }
    return (
        <div className={style.productCard + " " + style['desktop' + columns.countDesktop] + " " + style['mobile' + columns.countMobile]}>
            <div className={style.imageBlock}>
                {/*<div style={{backgroundImage: `url(${product.image})`, width: '100%', height: '100%'}} className={style.img}></div>*/}
                <img src={product.image} alt={product.name}/>
                <div className={style.badges}>
                    {product.isNew && <Badge type={"new"}/>}
                    {product.actualPrice && <Badge type={"sale"} sale={product.sale}/>}
                </div>
                <div className={style.addToCart} aria-label={'Add to card'}>Add to cart</div>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.rating}>
                    {ratingIcons.map((star, index) =>
                        <span key={`rating_${index}`}>{star}</span>)}
                </div>
                <div>
                    <h5 className={style.name}>{product.name}</h5>
                </div>
                <div>
                    <span className={style.actualPrice}>${product.actualPrice}</span>
                    {product.sale && <span className={style.fullPrice}>${product.fullPrice}</span>}
                    <div className={style.description}>{product.description}</div>
                    <button className={style.addToCart} aria-label={'Add to card'}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;