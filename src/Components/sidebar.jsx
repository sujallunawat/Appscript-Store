'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/main.module.css';

const Sidebar = ({ showFilter, setShowFilter, item1 }) => {
  const [ideal, setIdeal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [occasion, setOcassion] = useState(false);
  const [work, setWork] = useState(false);
  const [fabrik, setFabrik] = useState(false);
  const [segment, setSegment] = useState(false);
  const [suitable, setSuitable] = useState(false);
  const [raw, setRaw] = useState(false);
  const [pattern, setPattern] = useState(false);
  const [item, setItem] = useState([]);
  const [filtermultipel, setFiltermultipel] = useState([]);

  useEffect(() => {
    if (item1 && item1.length > 0) {
      setItem(item1);
      setLoading(true);
    }
  }, [item1]);

  useEffect(() => {
    if (filtermultipel.length > 0) {
      const tempItems = filtermultipel.flatMap((selectedCat) =>
        item1.filter((i) => i.category === selectedCat)
      );
      setItem(tempItems);
    } else {
      setItem([...item1]);
    }
  }, [filtermultipel]);

  const handleCheckboxChange = (cat) => {
    const isPresent = filtermultipel.includes(cat);
    setFiltermultipel((prev) =>
      isPresent ? prev.filter((val) => val !== cat) : [...prev, cat]
    );
  };

  const renderlist = item.map((product, index) => {
    const {
      id,
      brand,
      thumbnail,
      title,
      discountPercentage,
      price,
      rating,
    } = product;

    return (
      <div className={styles.card} key={id || index}>
        <div className={styles.imgin}>
          <img src={thumbnail} className={styles.img} alt={brand} />
        </div>
        <ul className={styles.textbox}>
          <li className={styles.texttitle}>{title}</li>
          <li className={styles.textdisco}>
            <span className={styles.textdiscoin}>
              DISCOUNT: {discountPercentage}%
            </span>
          </li>
          <li className={styles.textprice}>PRICE: ₹{price}</li>
          <li className={styles.rating}>
            RATING: {typeof rating === 'object' ? `${rating.rate} (${rating.count} reviews)` : rating}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <div className={showFilter ? styles.side : styles.hidden}>
            {/* Filters */}
            <div className={styles.idealbox}>
              <div className={styles.costomize}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('laptops')}
                />
                <label>CUSTOMIZE</label>
              </div>
              <p
                className={styles.hedingideal}
                onClick={() => setIdeal(!ideal)}
              >
                IDEAL FOR
              </p>
              <p>All</p>
              <div className={ideal ? styles.ideal : styles.hidden}>
                {['laptops', 'smartphones', 'fragrances', 'groceries'].map(
                  (val) => (
                    <React.Fragment key={val}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(val)}
                      />
                      <label>{val}</label>
                      <br />
                    </React.Fragment>
                  )
                )}
              </div>
            </div>

            {/* Other Filters */}
            {[
              ['OCASSION', occasion, setOcassion],
              ['WORK', work, setWork],
              ['FABRIK', fabrik, setFabrik],
              ['SEGMENT', segment, setSegment],
              ['SUITABLE FOR', suitable, setSuitable],
              ['RAW MATERIALS', raw, setRaw],
              ['PATTERN', pattern, setPattern],
            ].map(([label, state, toggle]) => (
              <div key={label} className={styles.ocassionbox}>
                <p
                  className={styles.hedingideal}
                  onClick={() => toggle(!state)}
                >
                  {label}
                </p>
                <p>All</p>
                <div className={state ? styles.ideal : styles.hidden}>
                  {['men', 'women', 'Baby & Kids'].map((val) => (
                    <React.Fragment key={val}>
                      <input type="checkbox" />
                      <label>{val}</label>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.main}>{renderlist}</div>
        </div>
      ) : (
        <div className={styles.loadingmain}>
          <p className={styles.loading}>Loading</p>
        </div>
      )}
    </>
  );
};

export default Sidebar;
