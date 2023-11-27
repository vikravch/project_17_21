import React, {useEffect} from 'react';
import style from './filterTypesDesktop.module.css'
import {categoriesArray, priceArray} from "../../../domain/model/filterConst";

const FilterTypesDesktop = () => {

    useEffect(() => {
        const input = document.getElementsByName('price');
        input.forEach(item => {
            // @ts-ignore
            if (item.attributes['checked']) {
                // @ts-ignore
                item.nextElementSibling.classList.add(style.inputChecked);
            }
        })
    }, [])

    return (
        <div className={style.block}>
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                {categoriesArray.map(item =>
                    <li key={item}>{item}</li>
                )}
                </ul>

            </div>
            <div className={style.price}>
                <p>Price</p>
                {/*<ul>*/}
                {/*    {priceArray.map(item =>*/}
                {/*        <li key={item.min}>${item.min} - {item.max}</li>*/}
                {/*    )}*/}
                {/*</ul>*/}

                {priceArray.map(item =>
                    <label key={'label-' + item.min}>
                        <input type={'checkbox'} id={item.min + '-price'} name={'price'} key={'input-' + item.min}/>
                        <p key={'p-' + item.min}>${item.min} - {item.max}</p>
                        <div key={'type' + item.min} className={style.checkboxCheckmark}></div>
                    </label>
                )}

            </div>
        </div>
    );
};

export default FilterTypesDesktop;