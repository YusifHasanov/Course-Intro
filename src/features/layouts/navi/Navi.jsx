import React from 'react';
import styles from './navi.module.css';

const Navi = () => {
    return (
        <div id={"nav"} className={styles.navContainer}>
            <div className={styles.navIconDiv}>
            </div>
            <div></div>
           <div className={styles.navRight}>
               <ul className={styles.navList}>
                   <li><a rel={"nofollow"} href={"#header"}>Ana shifə</a></li>
                   <li><a rel={"nofollow"} href="#teleblerimiz">Tələblər</a></li>
                   <li><a rel={"nofollow"} href="#dersler">Dersler</a></li>
                   <li><a rel={"nofollow"} href="#questions">Suallar</a></li>
               </ul>
               <button className={styles.applyBtn}>Əlaqə</button>
           </div>
        </div>
    );
};

export default Navi;
