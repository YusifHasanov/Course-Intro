import React from 'react';
import styles from './timeprice.module.css';
import grid from './../../assets/whatsNewGrid.png'
import vector from './../../assets/vector.png'
import manat from './../../assets/manat.png'
import {Button} from "@chakra-ui/react";
import Go from "../../../GlobalRouting";
import {useNavigate} from "react-router-dom";
const courses = [
    {
        title: "Front-end",
        subtitle: "10 ay",
        text: ["Front-end - 300"],
        path: "frontend"
    },
    {
        title: "Back-end",
        subtitle: "10 ay",
        text: ["Back-end - 400"],
        path: "backend"

    },
    {
        title: "Full-stack",
        subtitle: "18 ay",
        text: [
            `Front-end - 300`, `Back-end - 350`
        ],
        path: "fullstack"
    }
]

const TimePrice = () => {
const navigate=useNavigate();
    return (
        <div className={styles.whatsNew} id={"dersler"}>
            <div className={styles.header} style={{backgroundImage: grid}}>
                <h3>Tədris müddəti və qiymət</h3>
                <p>
                    Web proqramlaştırmanın hər sahəsi üzrlə yüksək keyfiyyətli və iş zəmanətli dərslər.
                </p>
                <a href="https://course-intro.netlify.app">Haqqımızda
                    <img className={styles.rightArrow} src={vector} alt=""/>
                </a>
            </div>
            <div className={styles.boxes} >
                <div className={styles.content}>
                    {courses.map((course, index) => (
                        <div className={styles.box} key={index}>
                            <div className={styles.boxTitle}>
                                {course.title}
                            </div>
                            <div className={styles.boxContent}>
                                <div>
                                    <p className={styles.subtitle}>{course.subtitle}</p>
                                    <p className={styles.text}>{course.text.map((t,index) => (<div className={styles.price} key={index}> {t}
                                        <img className={styles.manat} src={manat} alt="manat"/> </div>))}</p>
                                </div>

                             <div className={styles.qeydiyyat}>
                                 <Button onClick={()=>{Go.to(navigate,`/registration/${course.path}`)}}>Qeydiyyat</Button>
                             </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimePrice;
