import React, { useContext, useState } from 'react'
import style from "../Mcss/Review.module.css"
import { WineContext } from '../Mcontext/WineContextProvider'
import { Rating } from '@mui/material';
import { useLocation } from 'react-router-dom';

type ReviewProps = { setShowReview: (value: boolean) => void; };

const Review = ({ setShowReview }: ReviewProps) => {

    const { wines, currentWineId } = useContext(WineContext)
    const wine = wines.find(w => w.id === currentWineId);

    const [star,setStar] = useState(3);
    const [reviewText, setReviewText] = useState("");
    const [reviewName, setReviewName] = useState("");

    const total = wine?.reviews.length || 0;

    const ratingCounts: Record<number, number> = {
        5: wine?.reviews.filter(r => r.rating === 5).length || 0,
        4: wine?.reviews.filter(r => r.rating === 4).length || 0,
        3: wine?.reviews.filter(r => r.rating === 3).length || 0,
        2: wine?.reviews.filter(r => r.rating === 2).length || 0,
        1: wine?.reviews.filter(r => r.rating === 1).length || 0,
    };

    const avgRating = wine?.reviews && wine.reviews.length > 0 ? wine.reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;

    const [closing, setClosing] = useState(false);  

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setShowReview(false), 300);
    };

    const handleReviewSubmit = () => {
        if(reviewText == "" || reviewName == "")
            return;
        //set new review
    }

    return (
        <div className={`${style.overlay} ${closing ? style.overlayClosing : ""}`} onClick={handleClose}>
            <div className={`${style.reviewPage} ${closing ? style.closing : ""}`}
                onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className={style.closeBtn}>X</button>
                <h2>Reviews</h2>

                <div className={style.summaryBox}>
                    <div className={style.leftSummary}>
                        <div className={style.bigRating}>{avgRating.toFixed(1)}</div>
                        <div className={style.stars}> <Rating value={avgRating} precision={0.5} readOnly /></div>
                        <div className={style.totalRatings}>({total})</div>
                    </div>

                    <div className={style.rightBars}>
                        {[5, 4, 3, 2, 1].map(star => {
                            const count = ratingCounts[star];
                            const percent = total > 0 ? (count / total) * 100 : 0;

                            return (
                                <div key={star} className={style.barRow}>
                                    <span>{star} <Rating value={1} max={1} readOnly /></span>
                                    <div className={style.bar}>
                                        <div
                                            className={style.fill}
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                    <span className={style.count}>{count}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={style.columns}>

                    <div className={style.leftCol}>

                        <div className={style.reviewList}>
                            {wine?.reviews.map(r =>
                                <div key={r.id} className={style.reviewItem}>
                                    <img src="profile.png" className={style.avatar} />
                                    <div className={style.reviewContent}>
                                        <div className={style.headerRow}>
                                            <span className={style.name}>{r.name}</span>
                                            <span className={style.rating}>{r.rating} <Rating value={r.rating} readOnly /></span>
                                        </div>

                                        <p className={style.text}>{r.comment}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={style.rightCol}>
                        <h3>Add Review</h3>

                        <input
                            type="text"
                            placeholder="Your name"
                            className={style.input}
                            onChange={(e) => setReviewName(e.target.value)}
                            readOnly/>
                        <Rating
                            value={star}
                            max={5}
                            onChange={(event, newValue) => setStar(newValue || 0)}
                            className={style.ratingInput} />
                        <textarea
                            placeholder="Your review..."
                            className={style.textarea}
                            onChange={(e) => setReviewText(e.target.value)}
                            value={reviewText}/>
                        <button className={style.submitBtn} onClick={() => handleReviewSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review