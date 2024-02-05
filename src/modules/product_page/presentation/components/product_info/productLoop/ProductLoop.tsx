import React, {useEffect, useState} from 'react';
import styles from './ProductLoop.module.css';
import {Img} from "../../temp/constants";
import {useAppDispatch, useAppSelector} from "../../../../../../general/redux/hooks";
import {setColor} from "../../../redux/productColorSlice";

interface Measurements {
    measurements: string | undefined
}

const ProductLoop = ({measurements}: Measurements) => {

    const [pickedColor,setPickedColor] = useState('dark');
    const colors = useAppSelector(state => state.productPage.productImages?.colorImages);
    const dispatch = useAppDispatch();

    const colorHandle = (e : any) =>{
        setPickedColor(e.target.alt);
    }

    useEffect(()=>{
        dispatch(setColor(pickedColor));
    },[pickedColor])

    
    return (
        <div className={styles.product_loop}>
            <div className={styles.measurements_info}>
                <p className={styles.measurements}>Measurements</p>
                <p className={styles.measurements_data}>{measurements}</p>
            </div>
            <div className={styles.swatches}>
                <div className={styles.color}>
                    <p>Choose Color</p>
                    <div className={styles.arrow}><img src={Img[2].img}/></div>
                </div>
                <p className={styles.color_name}>{pickedColor}</p>
                <div className={styles.tables}>
                    {colors?.map((e,index )=> pickedColor === e.color ? <img key={index} className={styles.picked_table} src={e.img}/> :
                            <img  key={index} className={styles.table_uniq} alt={e.color}  onClick={colorHandle}   src={e.img}/>)}
                </div>
            </div>

        </div>
    );
};

export default ProductLoop;