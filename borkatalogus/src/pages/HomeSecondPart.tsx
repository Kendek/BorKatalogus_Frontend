import styles from "../Home.module.css"

const HomeSecondPart = () => {
  return (
        <div className={styles.HomeSecond}>
        <h1 className={styles.Title}>Our best rated Wines! </h1>

        <div className={styles.FavCardContainer}>

            <div className={styles.FavCardUp} >
                <img src="WineBottle.png" alt="" />
                <div className={styles.CardDesc}></div>
            </div>
            <div className={styles.FavCardDown} ></div>
            <div className={styles.FavCardUp}></div>
            <div className={styles.FavCardDown}></div>

        </div>
      </div>
  )
}

export default HomeSecondPart