import { useContext, useEffect, useState } from 'react'
import style from '../Mcss/Webshop.module.css'
import WebshopItem from '../Mcomponents/WebshopItem'
import Slider from '@mui/material/Slider';
import { WineContext, type Wine } from '../Mcontext/WineContextProvider';
import CurrentWine from '../Mcomponents/CurrentWine';
import Review from './Review';

type WebshopProps = {
  cartIconRef: React.RefObject<HTMLDivElement | null>
};

const Webshop = ({ cartIconRef }: WebshopProps) => {

  const { wines, currentWineId } = useContext(WineContext)
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceValue, setPriceValue] = useState<number[]>([0, 0]);
  const [openFilter, setOpenFilter] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (wines.length > 0) {
      const max = Math.max(...wines.map(w => w.price));
      setMaxPrice(max);
      setPriceValue([0, max]);
    }
  }, [wines]);

  const [filteredWines, setFilteredWines] = useState<Wine[]>(wines);
  useEffect(() => {
    if (wines.length > 0) setFilteredWines(wines);
  }, [wines]);

  const [selectedTaste, setSelectedTaste] = useState<string | null>(null);
  const tasteFilter = (taste: string) => setSelectedTaste(taste);

  const tasteCounts = wines.reduce((acc: Record<string, number>, wine) => {
    const taste = wine.taste.toLowerCase();
    acc[taste] = (acc[taste] || 0) + 1;
    return acc;
  }, {});
  const tasteList = Object.entries(tasteCounts);

  const applyFilters = () => {
    let result = wines;
    if (inputValue.trim() !== "") {
      result = result.filter(w => w.name.toLowerCase().startsWith(inputValue.toLowerCase()));
    }
    if (selectedTaste) {
      result = result.filter(w => w.taste.toLowerCase() === selectedTaste);
    }
    result = result.filter(w => w.price >= priceValue[0] && w.price <= priceValue[1]);
    setFilteredWines(result);
  };

  useEffect(() => { applyFilters(); }, [inputValue]);
  useEffect(() => { applyFilters(); }, [priceValue]);
  useEffect(() => { applyFilters(); }, [selectedTaste]);

  const Reset = () => {
    setInputValue("");
    setSelectedTaste(null);
    setPriceValue([0, maxPrice]);
  };

  useEffect(() => {
    document.body.style.overflow = currentWineId ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [currentWineId]);

  const sliderSx = {
    color: '#8B1E3F',
    '& .MuiSlider-thumb': {
      backgroundColor: '#8B1E3F',
      '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 0 8px #da4c7726' },
    },
    '& .MuiSlider-rail': { backgroundColor: 'gray', opacity: 0.5 }
  };

  return (
    <div className={style.mainDiv}>
      <div className={`${style.container} ${currentWineId ? style.blurred : ""}`}>
        <div className={style.contentArea}>

          <button className={style.filterToggle} onClick={() => setOpenFilter(!openFilter)}>
            <i className={openFilter ? "fas fa-times" : "fas fa-sliders"}></i>
            {openFilter ? "Close" : "Filter"}
          </button>

          {openFilter && (
            <div className={style.filterOverlay} onClick={() => setOpenFilter(false)} />
          )}

          <div className={`${style.filterPanel} ${openFilter ? style.open : ""}`}>
            <div className={style.filterBlock}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder='Search...'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
            </div>
            <div className={style.filterBlock}>
              <div className={style.filterTitle}><span>Product Category</span></div>
              <div className={style.filterTypes}>
                {tasteList.map(([taste, count]) => (
                  <span
                    key={taste}
                    onClick={() => tasteFilter(taste)}
                    className={selectedTaste === taste ? style.activeTaste : ""}
                  >
                    {taste.charAt(0).toUpperCase() + taste.slice(1)} ({count})
                  </span>
                ))}
              </div>
            </div>
            <div className={style.filterBlock}>
              <div className={style.filterTitle}><span>Filtering by Price</span></div>
              <div className={style.filterPrice}>
                <p>Price: <span>{priceValue[0]}</span> Ft — <span>{priceValue[1]}</span> Ft</p>
                <Slider
                  value={priceValue}
                  onChange={(e, newValue) => setPriceValue(newValue as number[])}
                  min={0} max={maxPrice} step={1000}
                  sx={sliderSx}
                />
              </div>
            </div>
            <button className={style.removeFilterBtn} onClick={Reset}>Remove Filters</button>
            <button
              className={style.applyFilterBtn}
              onClick={() => setOpenFilter(false)}
            >
              <i className="fas fa-check"></i>
              Show Results
            </button>
          </div>

          <div className={style.itemsGrid}>
            <WebshopItem filteredWines={filteredWines} cartIconRef={cartIconRef} />
          </div>
        </div>
      </div>

      {currentWineId && (
        <div className={style.overlay}>
          <CurrentWine cartIconRef={cartIconRef} setShowReview={setShowReview} />
        </div>
      )}
      {showReview && (
        <div className={style.overlay}>
          <Review setShowReview={setShowReview} />
        </div>
      )}
    </div>
  );
}

export default Webshop