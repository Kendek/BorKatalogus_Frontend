import React, { useContext, useState } from 'react'
import style from '../Mcss/Items.module.css'
import { Link } from 'react-router-dom'
import { WineContext, type Wine } from '../Mcontext/WineContextProvider';

const WebshopItem = ({filteredWines} : {filteredWines : Wine[]}) => {

    const { setCurrentWineId, setCartItems, cart } = useContext(WineContext);

    const handleAddToCart = (e: React.MouseEvent, wineToCart: Wine) => {
        e.stopPropagation();
        e.preventDefault();

        setCartItems(prev => [...prev, wineToCart]);
        
        console.log(cart)
    };

    const handleClick = (e: React.MouseEvent, wine: Wine) => 
    { 
        setCurrentWineId(wine.id)

        setTimeout(() => { 
           e.preventDefault();
        }, 300); };
        

    return (
        filteredWines.map((wine, index) => (
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
                                    <button className={style.itemBtn} onClick={(e) => handleAddToCart(e, wine)}><i className="fa-solid fa-cart-shopping" /></button>
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