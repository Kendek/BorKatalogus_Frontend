import React from 'react'
import style from '../Mcss/Webshop.module.css'
import WebshopItem from '../Mcomponents/Items'

const Webshop = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <div className={style.header}>
          <p>Red</p>
          <p>White</p>
          <p>Blue</p>
        </div>
        <div className={style.itemsGrid}>
          <WebshopItem></WebshopItem>
          <WebshopItem></WebshopItem>
          <WebshopItem></WebshopItem>
          <WebshopItem></WebshopItem>
          <WebshopItem></WebshopItem>
          <WebshopItem></WebshopItem>
        </div>
      </div>
    </div>

  )
}

export default Webshop