import React from 'react';
import trace from './../../assets/Trace.png'
import RightArrow from "./../../assets/ArrowRight.png"
import LeftArrow from './../../assets/ArrowLeft.png'
import styles from './success.module.css';

const DesktopCards = () => {
    return (
        <div className={styles.appCards}>
            <div>
                <h1>1</h1>
                <h3>Qeydiyyat.</h3>
                <p>
                    Qeyd olunan bölmələrdən birinə bas vuraraq qeydiyyat mərhələsindən keç və Slikon vadisinə gedən
                    yolun ilk addımını at
                </p>
                <img src={RightArrow} alt=""/>
            </div>
            <div>
                <h1>2</h1>
                <h3>Öyrənmə müddəti.</h3>
                <p>
                    Kursu tələblərə uyğun bir şəkildə müvəfəqiyyətlə bitir.
                </p>
                <img src={LeftArrow} alt="left-arrow"/>
            </div>
            <div>
                <h1>3</h1>
                <h3>Xəyalların artıq gerçəkdir!</h3>
                <p>
                    Əldə etdiyin biliklərlə Turing qeydiyyatını tamamla və Amerika və Avropda işləyə biləcəyin
                    şirkətlərə başvur.
                </p>

            </div>
        </div>
    )
}
const Mobile = () => {
    return (
            <div className={styles.mobileCards}>
                <div className={styles.cardItem}>
                    <h1>1</h1>
                    <h3>Qeydiyyat.</h3>
                    <p>
                        Qeyd olunan bölmələrdən birinə bas vuraraq qeydiyyat mərhələsindən keç və Slikon vadisinə gedən
                        yolun ilk addımını at
                    </p>
                    <img className={styles.firstImage} src={RightArrow} alt=""/>
                </div>
                <div className={styles.cardItem}>
                    <h1>2</h1>
                    <h3>Öyrənmə müddəti.</h3>
                    <p>
                        Kursu tələblərə uyğun bir şəkildə müvəfəqiyyətlə bitir.
                    </p>
                    <img className={styles.secondImage} src={LeftArrow} alt="left-arrow"/>
                </div>
                <div className={styles.cardItem}>
                    <h1>3</h1>
                    <h3>Xəyalların artıq gerçəkdir!</h3>
                    <p>
                        Əldə etdiyin biliklərlə Turing qeydiyyatını tamamla və Amerika və Avropda işləyə biləcəyin
                        şirkətlərə başvur.
                    </p>

                </div>
            </div>

    )
}
const Tablet = () => {
    return(
        <div className={styles.TabletCards}>
            <div className={styles.tabletItem}>
                <h1>1</h1>
                <h3>Qeydiyyat.</h3>
                <p>
                    Qeyd olunan bölmələrdən birinə bas vuraraq qeydiyyat mərhələsindən keç və Slikon vadisinə gedən
                    yolun ilk addımını at
                </p>
                <img content={styles.firstImageD} className={styles.firstImageT} src={RightArrow} alt=""/>
            </div>
            <div className={styles.tabletItem}>
                <h1>2</h1>
                <h3>Öyrənmə müddəti.</h3>
                <p>
                    Kursu tələblərə uyğun bir şəkildə müvəfəqiyyətlə bitir.
                </p>
                <img content={styles.secondImageD} className={styles.secondImageT} src={LeftArrow} alt="left-arrow"/>
            </div>
            <div className={styles.tabletItem}>
                <h1>3</h1>
                <h3>Xəyalların artıq gerçəkdir!</h3>
                <p>
                    Əldə etdiyin biliklərlə Turing qeydiyyatını tamamla və Amerika və Avropda işləyə biləcəyin
                    şirkətlərə başvur.
                </p>

            </div>
        </div>
    )
}
const SuccessHistory = () => {
    return (
        <div className={styles.all}>
            <div className={styles.appProcess}>
                <div>
                    <div className={styles.appTitle}>
                        <h2>Uğur hekayəsi</h2>
                        <img src={trace} alt=""/>
                    </div>
                    <p>
                        Kurs boyunca keçəcəyiniz bütün dərs və təlimlərə əsasən sizə ən yaxşı işlər təklif ediləcək.
                    </p>
                </div>
                <DesktopCards/>
                <Tablet/>
                <Mobile/>

            </div>
        </div>
    )
}

export default SuccessHistory



