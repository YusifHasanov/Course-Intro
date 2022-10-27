import React from 'react';
import trace from './../../assets/Trace.png'
import RightArrow from  "./../../assets/ArrowRight.png"
import LeftArrow from  './../../assets/ArrowLeft.png'
import styles from './application.module.css';

const ApplicationProcess = () => {
    return (
        <>
            <div className={styles.appProcess}>
                <div>
                    <div className={styles.appTitle}>
                        <h2>Uğur hekayəsi</h2>
                        <img src={trace} alt="" />
                    </div>
                    <p>
                        Kurs boyunca keçəcəyiniz bütün dərs və təlimlərə əsasən sizə ən yaxşı işlər təklif ediləcək.
                    </p>
                </div>

                <div className={styles.appCards}>
                    <div>
                        <h1>1</h1>
                        <h3>Qeydiyyat.</h3>
                        <p>
                                Qeyd olunan bölmələrdən birinə bas vuraraq qeydiyyat mərhələsindən keç və Slikon vadisinə gedən yolun ilk addımını at
                        </p>
                        <img src={RightArrow} alt="" />
                    </div>
                    <div>
                        <h1>2</h1>
                        <h3>Öyrənmə müddəti.</h3>
                        <p>
                            Kursu tələblərə uyğun bir şəkildə müvəfəqiyyətlə bitir.
                        </p>
                    </div>
                    <div>
                        <h1>3</h1>
                        <h3>Xəyalların artıq gerçəkdir!</h3>
                        <p>
                            Əldə etdiyin biliklərlə Turing qeydiyyatını tamamla və Amerika və Avropda işləyə biləcəyin şirkətlərə başvur.
                        </p>
                        <img src={LeftArrow} alt="left-arrow" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplicationProcess



