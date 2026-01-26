import React, { useContext, useState } from 'react'
import style from '../Mcss/Items.module.css'
import { Link } from 'react-router-dom'
import { WineContext, type Wine } from '../Mcontext/WineContextProvider';

const WebshopItem = ({switchPage} : any) => {

    const { wines, setCurrentWineId } = useContext(WineContext);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const handleClick = (e: React.MouseEvent, wine: Wine) => 
    { 
        switchPage(true)
        setCurrentWineId(wine.id)

        setTimeout(() => { 
           e.preventDefault();
        }, 300); };
        

    return (
        wines.map((wine, index) => (
            <Link to={"/currentWine"}>
                <div className={style.singleItem} style={{ "--i": index } as any} onClick={(e) => handleClick(e,wine)}>
                    <div className={style.imageWrapper}>
                        <img src="wineTest.png" alt="" />
                        <div className={style.overlay}>
                            <div className={style.itemTexts}>
                                <div>
                                    <div className={style.itemTitle}>
                                        <span>{wine.name}</span>
                                    </div>
                                    <div className={style.itemPrice}>
                                        <p>{wine.price} Ft</p>
                                    </div>
                                </div>
                                <div>
                                    <button className={style.itemBtn} onClick={handleAddToCart}><i className="fa-solid fa-cart-shopping" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    )
}

export default WebshopItem