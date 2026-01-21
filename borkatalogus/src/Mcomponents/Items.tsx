import React from 'react'
import style from '../Mcss/Items.module.css'
import { Rating } from 'primereact/rating';

const WebshopItem = () => {



    return (
        <div className={style.singleItem}>
            <div className={style.imageWrapper}>
                <img src="wineBottle.jpg" alt=""/>
            </div>
            <div className={style.itemTexts}>
                <div className={style.itemTitle}>
                    <span>Title</span>
                    <div className={style.itemRating}>
                        <p>
                            <Rating value={5} readOnly cancel={false} />
                        </p>
                        <span>4.5</span>
                    </div>
                </div>
                <div className={style.itemInfos}>
                    <p>400$</p>
                </div>
                <button className={style.itemBtn}>Add to cart</button>
            </div>
        </div>
    )
}

export default WebshopItem