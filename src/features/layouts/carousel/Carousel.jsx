import React from 'react';

import styles from './carousel.module.css';

const carouselData = [
    {

        title: 'Frontend',
        price: '10 ay',
        content: [
            "HTML 5", "CSS 3", "JavaScript", "React Js", "Redux Toolkit"
        ]
    },
    {

        title: 'Backend',
        price: '10 ay',
        content: ["C#", "MSSQL", "Entity Framework", "ASP.NET Core"]
    }, {

        title: 'Fullstack',
        price: '18 ay',
        content: ["All of the above","Frontend", "Backend"]
    }
]
const MyCarousel = () => {
    return (
        <div className={styles.carouselContainer}>

            {carouselData.map((item, index) => (

                <div className={styles.carouselItem}>
                    <div>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.price}>Kurs müddəti: {item.price}</p>
                        <div className={styles.items}>
                            {item.content.map((i) => (
                                <p className={styles.content}>
                                    {i}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>asdasdd</div>
                </div>

            ))}


        </div>
    );
};

export default MyCarousel;
