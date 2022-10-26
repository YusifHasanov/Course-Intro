import React from 'react';
import styles from './navi.module.css';


const hrefRenderingObj = {
    header: 'header',
    teleblerimiz: 'teleblerimiz',
    dersler: 'dersler',
    questions: 'questions'
}

const Navi = () => {
    return (
        <div id={"nav"} className={styles.navContainer}>
            <div className={styles.navIconDiv}>
            </div>
            <div></div>
            <div className={styles.navRight}>
                <ul className={styles.navList}>
                    <li><a href={hrefRenderingObj.header}>Ana shifə</a></li>
                    <li><a href={hrefRenderingObj.teleblerimiz}>Tələblər</a></li>
                    <li><a href={hrefRenderingObj.dersler}>Dersler</a></li>
                    <li><a href={hrefRenderingObj.questions}>Suallar</a></li>
                </ul>
                <button className={styles.applyBtn}>Əlaqə</button>
            </div>
        </div>
    );
};

export default Navi;
