import styles from "../Home.module.css"
import HomeSecondPart from "../Ksrc/HomeSecondPart"
import {Rating} from "primereact/rating"
const Home = () => {
  return (
    <div className={styles.HomeMain}>

      <div className={styles.HomeFirst}>  
        <div className={styles.TextContainer}>
          <h1>Quality & Quantity at one place!</h1>
          <h3>A a wide variety of wine from all around the world!</h3>
          <h3>Trusted and used by thousands of users everyday.</h3>
          <h1 className={styles.Stars}><Rating className={styles.Stars} value={4} readOnly cancel={false}></Rating></h1>
          <h3>Worldwide shipping in everyday of the year for affordable price.</h3>
          <div className={`${styles.LineDecor} ${styles.White}` }></div>
          <h2>Order Now 🛒</h2>
        </div>  
      </div>
      <HomeSecondPart>
        
      </HomeSecondPart>

    </div>
  )
}

export default Home