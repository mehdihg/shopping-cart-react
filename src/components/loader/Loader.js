import React from 'react';
import loader from './loader.svg'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} />
        </div>
    );
};

export default Loader;