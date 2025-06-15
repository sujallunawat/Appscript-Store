'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/main.module.css';
import Products from './Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [activeFilter, setActiveFilter] = useState('RECOMMENDED');
    const [loading, setLoading] = useState(true);

    // Sidebar section toggles
    const [ideal, setIdeal] = useState(false);
    const [occasion, setOcassion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabrik, setFabrik] = useState(false);
    const [segment, setSegment] = useState(false);
    const [suitable, setSuitable] = useState(false);
    const [raw, setRaw] = useState(false);
    const [pattern, setPattern] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            });
    }, []);

    const toggleFilter = () => setShowFilter((prev) => !prev);
    const handleMouseEnter = () => setShowToggle(true);
    const handleMouseLeave = () => setShowToggle(false);

    const handleCheckboxChange = (category) => {
        let updated = [...selectedCategories];
        if (updated.includes(category)) {
            updated = updated.filter((c) => c !== category);
        } else {
            updated.push(category);
        }

        setSelectedCategories(updated);

        const filtered = products.filter((p) => updated.includes(p.category));
        setFilteredProducts(updated.length ? filtered : products);
    };

    const filterByDiscount = () => {
        const filtered = products.filter((p) => p.rating.rate > 4);
        setFilteredProducts(filtered);
        setActiveFilter('DISCOUNT FROM 10%');
    };

    const filterByRating = () => {
        const filtered = products.filter((p) => p.rating.rate > 4.1);
        setFilteredProducts(filtered);
        setActiveFilter('4 STAR +');
    };

    const filterByHighPrice = () => {
        const filtered = [...products].sort((a, b) => b.price - a.price);
        setFilteredProducts(filtered);
        setActiveFilter('PRICE: HIGH');
    };

    const filterByLowPrice = () => {
        const filtered = [...products].sort((a, b) => a.price - b.price);
        setFilteredProducts(filtered);
        setActiveFilter('PRICE: LOW');
    };

    const resetFilter = () => {
        setFilteredProducts(products);
        setActiveFilter('RECOMMENDED');
        setSelectedCategories([]);
    };

    if (loading) {
        return (
            <div className={styles.loadingmain}>
                <p className={styles.loading}>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.toppart} onMouseLeave={handleMouseLeave}>
                <div className={styles.topin}>
                    <h1 className={styles.hedding}>DISCOVER OUR PRODUCTS</h1>
                    <p className={styles.para1}>
                        Welcome to our shopping app, where convenience meets style!
                    </p>
                </div>
            </div>

            <div className={styles.filterbar}>
                <div className={styles.box}>
                    <p className={styles.filterno}>{filteredProducts.length}</p>
                    <p className={styles.filter} onClick={toggleFilter}>
                        {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
                    </p>
                    <p className={styles.deffilter} onMouseEnter={handleMouseEnter}>
                        {activeFilter}
                    </p>
                </div>

                {showToggle && (
                    <div className={styles.toggle} onMouseLeave={handleMouseLeave}>
                        <p className={styles.toggle1} onClick={resetFilter}>RECOMMENDED</p>
                        <p className={styles.toggle2} onClick={filterByDiscount}>DISCOUNT FROM 10%</p>
                        <p className={styles.toggle3} onClick={filterByRating}>4 STAR +</p>
                        <p className={styles.toggle4} onClick={filterByHighPrice}>PRICE: HIGH</p>
                        <p className={styles.toggle5} onClick={filterByLowPrice}>PRICE: LOW</p>
                    </div>
                )}
            </div>

            <div className={styles.container}>
                <div className={showFilter ? styles.side : styles.hidden}>
                    {/* Custom Filter */}
                    <div className={styles.idealbox}>
                        <div className={styles.costomize}>
                            <input type="checkbox" onChange={() => handleCheckboxChange('laptops')} />
                            <label>CUSTOMIZE</label>
                        </div>
                        <p className={styles.hedingideal} onClick={() => setIdeal(!ideal)}>IDEAL FOR</p>
                        <p>All</p>
                        <div className={ideal ? styles.ideal : styles.hidden}>
                            {['laptops', 'smartphones', 'fragrances', 'groceries'].map((val) => (
                                <React.Fragment key={val}>
                                    <input type="checkbox" onChange={() => handleCheckboxChange(val)} />
                                    <label>{val}</label>
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Reusable Section Filters */}
                    {[
                        ['OCCASION', occasion, setOcassion],
                        ['WORK', work, setWork],
                        ['FABRIK', fabrik, setFabrik],
                        ['SEGMENT', segment, setSegment],
                        ['SUITABLE FOR', suitable, setSuitable],
                        ['RAW MATERIALS', raw, setRaw],
                        ['PATTERN', pattern, setPattern],
                    ].map(([label, state, toggle]) => (
                        <div key={label} className={styles.ocassionbox}>
                            <p className={styles.hedingideal} onClick={() => toggle(!state)}>{label}</p>
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

                <div className={styles.main}
                     style={{ width: showFilter ? "85%" : "100%" }}
                >
                    <Products item1={filteredProducts} />
                </div>
            </div>
        </>
    );
};

export default Home;
