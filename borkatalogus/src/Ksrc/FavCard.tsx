import styles from "../Kcss/Home.module.css"
import '../Kcss/FavCard.css'
import { Rating } from '@mui/material';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { color } from "@amcharts/amcharts5";


const FavCard = (props: {  classname: string, name: string, price: number, rating: number, WineId: number }) => {
  const navigate = useNavigate();
  const SelectCardWine = () => {
    navigate('/webshop', { state: { wineId: props.WineId } });
  }

  return (
    <div className={props.classname} >
      <div className={styles.ImgBg}>
        <div className={styles.CircleRing} />
        <img className={styles.CardIMG} src={('../public/wineTest.png')} alt="" />
      </div>
      <div className={styles.CardDesc}>
        <span className={styles.CardTitle}>{props.name}</span>
        <br />
        <span className={styles.CardPrice}>{props.price} Ft</span>

        <span className={styles.CardRating}>
          <Rating
            value={props.rating}
            readOnly
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": { color: "#8B1E3F" },
              "& .MuiRating-iconEmpty": { color: "#8B1E3F" },
              fontSize: "1.4rem",
            }}
          />
          <span style={{color: "#8B1E3F", padding: "0 0 10px 10px"}}>           {props.rating.toFixed(1) }</span>

          </span>
        <button type="button" onClick={() => SelectCardWine()} className={styles.OrderButton}>Order!</button>
      </div>
    </div>
  )
}

export default FavCard