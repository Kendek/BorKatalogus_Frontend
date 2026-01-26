import React, { useContext, useEffect } from 'react'
import style from '../Mcss/CurrentWine.module.css'
import { Rating } from 'primereact/rating';
import { WineContext } from '../Mcontext/WineContextProvider';
import { Link } from 'react-router-dom';

const CurrentWine = () => {

  const { wines, currentWineId } = useContext(WineContext);
  const wine = wines.find(w => w.id === currentWineId);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, []);


  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <div className={style.backRow}>
          <Link to={"/webshop"}><button className={style.backBtn}>Back</button></Link>
        </div>
        <div className={style.wineLeftSide}>
          <img src="wineTest.png" alt="" />
        </div>
        <div className={style.wineRightSide}>
          <div className={style.wineTitle}>
            <span>{wine?.name}</span>
          </div>
          <div className={style.wineRating}>
            <span>
              <Rating value={5} readOnly cancel={false} />
              <p>35</p>
              <i className="fa-solid fa-grip-lines-vertical"></i>
              <Link to={"/review"}><b>View All Reviews</b></Link>
            </span>
          </div>
          <div className={style.winePrice}>
            <span>{wine?.price} Ft</span>
          </div>
          <div className={style.wineDescription}>
            <p>
              {wine?.description}
            </p>
          </div>
          <div className={style.wineDetails}>
            <div>
              <i className="fa-solid fa-wine-glass"></i>
              <span>{wine?.type}</span>
            </div>
            <div>
              <i className="fa-solid fa-wine-bottle"></i>
              <span>{wine?.alcoholContent} %</span>
            </div>
            <div>
              <i className="fa-brands fa-pagelines"></i>
              <span>{wine?.grapes.map(grape => grape.name)}</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar"></i>
              <span>{wine?.year}</span>
            </div>
          </div>
          <div className={style.wineBtn}>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWine