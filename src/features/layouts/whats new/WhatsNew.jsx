import React from 'react';
import styles from './whatsNew.module.css';
import grid from './../../assets/whatsNewGrid.png'
import vector from './../../assets/vector.png'

const courses = [
    {
        title: "Front-end",
        subtitle: "10 ay",
        text: ["Front-end - 300 ₼"],
        date: "Tezliklə..."
    },
    {
        title: "Back-end",
        subtitle: "8 ay",
        text: ["Back-end - 400 ₼"],
        date: "Tezliklə..."
    },
    {
        title: "Full-stack",
        subtitle: "18 ay",
        text: [
            `Front-end - 300 ₼`, `Back-end - 350 ₼`
        ],
        date: "Tezliklə..."
    }
]

const WhatsNew = () => {
    return (
        <div className={styles.whatsNew} id={"dersler"}>
            <div className={styles.header} style={{backgroundImage: grid}}>
                <h3>Tədris sahələri</h3>
                <p> Web proqramlaştırmanın hər sahəsi üzrlə dərslər!

                </p>
                <a href="https://course-intro.netlify.app">Read more on our blog
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
                                    <p className={styles.text}>{course.text.map((t,index) => (<div key={index}> {t} <br/></div>))}</p>
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
