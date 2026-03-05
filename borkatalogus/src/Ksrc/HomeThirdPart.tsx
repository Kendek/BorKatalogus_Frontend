import Rating from "@mui/material/Rating"
import styles from "../Kcss/Home.module.css"
import { div } from "motion/react-client"

const HomeThirdPart = () => {
  return (
    <div>
               <div className={styles.FlexBox}>
            <div className={styles.LineDecor}></div>
            <span className={styles.Title}> Explore our map of winerys!</span>
            <div className={styles.LineDecor}></div>
          </div>
        <div className={styles.HomeThird}>
                
            <div className={styles.HomeMapInfo}>

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