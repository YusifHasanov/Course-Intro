import React from 'react';
import styles from './header.module.css';
import headerLine from './../../assets/headerLine.png'
import downArrow from './../../assets/downArrow.png';
import {BsArrowRight} from "react-icons/bs";
import vector from "../../assets/vector.png";
const Header = () => {
    https://wa.me/2348160000000
    return (
        <div className={styles.header}>
            <h1>Silikon vadisində React developer
                <img src={headerLine} alt=""/>
            </h1>
            <div className={styles.buttons}>
                <button className={styles.discover}>Kurslar</button>
                <button className={styles.applyGrant}>Əlaqə <BsArrowRight className={styles.rightArrow}/></button>
            </div>
            <div className={styles.millions}>
                <div>
                    <p>25+</p>
                    <p>Real layihə</p>
                </div>
                <div>
                    <p>100%  </p>
                    <p>Nəticə </p>
                </div>
                <div>
                    <p>1000&#x20BC; +</p>
                    <p>İşlə təminat</p>
                </div>
            </div>
            <div className={styles.last}>
                <img src={downArrow} alt=""/>
                <div className={styles.text}>
                    <h3>Tələblərimiz</h3>
                    <p>Hər bir tələbə kurs müddətincə maksimum 3 dərs dərsdən qala bilər.</p>
                    <a href="#">
                        Haqqımızda
                        <img className={styles.rightArrow} src={vector} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
