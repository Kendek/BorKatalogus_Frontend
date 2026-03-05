
import styles from "../Kcss/Home.module.css"
import { FaGlobeAmericas } from "react-icons/fa";

const HomeThirdPart = () => {
  return (
    <div>
               <div className={styles.FlexBox}>
            <div className={styles.LineDecor}></div>
            <span className={styles.Title}> Explore our map of winerys!</span>
            <div className={styles.LineDecor}></div>
          </div>
        <div className={styles.HomeThird}>
                
            <div className={`${styles.HomeMapInfo}`}>
                <h1> <FaGlobeAmericas />Discover the world of wine with us! <FaGlobeAmericas /></h1>
                <h3>Explore our interactive map to find wineries from around
                    the globe. Whether you're looking for a local gem or an
                    international favorite, our map has you covered.
                    </h3>
                <div className={styles.LineDecor}></div>
                <h3>
                    Click on any winery to learn more about their offerings,
                    history, and unique characteristics. Start your wine
                    journey today and uncover the stories behind every
                    bottle!
                </h3>
                <div className={styles.LineDecor}></div>
                
            </div>

            <div className={styles.HomeMapGlobe}>
            <img
            className={styles.HomeMapGlobeImg}
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NmJ6bTV5Ymd6aWF3Y2FrbmpoNXQwbWR2ZjJyODd2MmppdnpweHV3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9hGr9h2m2p1rE5PSV6/giphy.gif"
            alt=""
            />
            </div>
        </div>
    </div>
  )
}

export default HomeThirdPart