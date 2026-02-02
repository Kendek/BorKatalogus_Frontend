import React, { useContext, useEffect, useState } from 'react'
import style from "../Mcss/Done.module.css"
import { WineContext } from '../Mcontext/WineContextProvider';
import { useNavigate } from 'react-router-dom';

const Done = () => {
  const [entering, setEntering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    requestAnimationFrame(() => setEntering(true));
  }, []);

  const { cart, setCartItems } = useContext(WineContext)

  const ResetAll = () => {
    localStorage.removeItem("discount");
    localStorage.removeItem("discountCode");
    localStorage.removeItem("cart");
    localStorage.removeItem("fullPrice");
    setCartItems([]);
    navigate("/home");
  }

  return (
    <div className={`${style.mainDiv} ${entering ? style.slideInRight : style.hide}`}>
      <div className={style.containerDone}>

        <span>Thank you for your purchase!</span>
        <p>We will send the receipt and the tracking number in email!</p>

        <div className={style.orderBox}>
          {cart.map((item, index) => (
            <div key={index} className={style.orderItem}>
              <div className={style.itemImg}>
                <img src="wineTest.png" alt={item.wine.name} />
              </div>
              <span className={style.itemName}>{item.wine.name}</span>
              <span className={style.itemQty}>Amount: {item.quantity}</span>
            </div>
          ))}
        </div>

        <button
          className={style.backButton}
          onClick={() => ResetAll()}
        >
        Back to Home
      </button>


    </div>
    </div >
  )
}

export default Done