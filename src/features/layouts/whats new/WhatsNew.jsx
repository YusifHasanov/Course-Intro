import React from 'react';
import styles from './whatsNew.module.css';
import grid from './../../assets/whatsNewGrid.png'
import vector from './../../assets/vector.png'

const courses = [
    {
        title: "Front-end",
        subtitle: "10 ay",
        text: ["Front-end - 300 ₼"],
        date: "January 1, 2022"
    },
    {
        title: "Back-end",
        subtitle: "8 ay",
        text: ["Back-end - 400 ₼"],
        date: "January 1, 2022"
    },
    {
        title: "Full-stack",
        subtitle: "18 ay",
        text: [
            `Front-end - 300 ₼`, `Back-end - 350 ₼`
        ],
        date: "January 1, 2022"
    }
]

const WhatsNew = () => {
    return (
        <div className={styles.whatsNew}>
            <div className={styles.header} style={{backgroundImage: grid}}>
                <h3>Tədris sahələri</h3>
                <p> Web proqramlaştırmanın hər sahəsi üzrlə dərslər!
                    <libero className=""></libero>
                </p>
                <a href="#">Read more on our blog
                    <img className={styles.rightArrow} src={vector} alt=""/>
                </a>
            </div>
            <div className={styles.boxes}>
                <div className={styles.content}>
                    {courses.map((course, index) => (
                        <div className={styles.box}>
                            <div className={styles.boxTitle}>
                                {course.title}
                            </div>
                            <div className={styles.boxContent}>
                                <div>
                                    <p className={styles.subtitle}>{course.subtitle}</p>
                                    <p className={styles.text}>{course.text.map(t => (<> {t} <br/></>))}</p>
                                </div>
                                <div className={styles.date}>{course.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatsNew;
