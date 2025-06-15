'use client';

import React from 'react';
import styles from '../styles/main.module.css';
import Image from 'next/image';

const Products = ({ item1, showFilter }) => {
    if (!item1 || item1.length === 0) {
        return (
            <div className={styles.loadingmain}>
                <p className={styles.loading}>Loading...</p>
            </div>
        );
    }

    return (
        <div className={`${styles.container} ${showFilter ? styles.withSidebar : ''}`}>
            <div className={styles.main}
             style={{ width: showFilter ? "85%" : "100%" }}
            >
                {item1.map((product) => (
                    <div className={styles.card} key={product.id}>
                        <div className={styles.imgin}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className={styles.img}
                            />
                        </div>
                        <ul className={styles.textbox}>
                            <li className={styles.texttitle}>Product Name</li>
                            <li className={styles.textdisco}>
                                Sign in or Create an account to see pricing:
                                <Image
                                    src="/image/love.svg"
                                    alt="Love Icon"
                                    width={20}
                                    height={20}
                                />
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
