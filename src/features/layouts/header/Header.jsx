import React, {useState} from 'react';
import styles from './header.module.css';
import headerLine from './../../assets/headerLine.png'
import downArrow from './../../assets/downArrow.png';
import {BsArrowRight} from "react-icons/bs";

import vector from "../../assets/vector.png";
import manat from './../../assets/manat.png'

import Modal from '../../components/MessageModal/Modal'


// https://towardsdev.com/learn-how-to-send-emails-using-nodemailer-with-node-js-and-react-js-b8c4606faf83
const Header = () => {
        const [isClicked, setIsClicked] = useState(false);

        return (

                <div id={"header"} className={styles.header}>
                    {isClicked ? <Modal show={isClicked} changeShow={setIsClicked}/> : null}
                    <h1>Silikon vadisində React developer all
                        <img src={headerLine} alt=""/>
                    </h1>
                    <div className={styles.buttons}>
                        <button className={styles.discover}>Kurslar</button>
                        <button onClick={() => {
                            setIsClicked(p => !p)
                        }} className={styles.applyGrant}>Əlaqə <BsArrowRight
                            className={styles.rightArrow}/></button>

                    </div>
                    <div className={styles.millions} id={"teleblerimiz"}>
                        <div>
                            <p>25+</p>
                            <p>Real layihə</p>
                        </div>
                        <div>
                            <p>100% </p>
                            <p>Nəticə </p>
                        </div>
                        <div>
                            <p>1000 <img src={manat} className={styles.manat} alt=""/> +</p>
                            <p>İşlə təminat</p>
                        </div>
                    </div>
                    <div className={styles.last}>
                        <img src={downArrow} alt=""/>
                        <div className={styles.text}>
                            <h3>Tədris proqrami</h3>
                            <p>Hər bölmə üçün tədris boyunca öyrədiləcək mövzularla aşağıdan tanış ola bilərsiz.</p>
                            <a rel={"nofollow"} href="https://course-intro.netlify.app/">
                                Haqqımızda
                                <img className={styles.rightArrow} src={vector} alt=""/>
                            </a>
                        </div>
                    </div>

                </div>

        );
    }
;

export default Header;
