import React from 'react'
import style from "../Mcss/Review.module.css";
import { Link } from 'react-router-dom';

const Review = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <div className={style.backRow}>
          <Link to={"/currentWine"}><button className={style.backBtn}>Back</button></Link>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Review