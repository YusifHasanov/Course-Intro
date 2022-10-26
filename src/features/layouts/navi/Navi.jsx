import React from 'react';
import styles from './navi.module.css';

const Navi = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navIconDiv}>Icon</div>
           <div className={styles.navRight}>
               <ul className={styles.navList}>
                   <li>Home</li>
                   <li>About</li>
                   <li>Diayvi</li>
                   <li>About</li>
                   <li>Diayvi</li>
                   <li>Blog</li>
               </ul>
               <button className={styles.applyBtn}>Apply for grant</button>
           </div>
        </div>
    );
};

export default Navi;
