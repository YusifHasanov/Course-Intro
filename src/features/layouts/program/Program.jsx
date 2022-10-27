import React from 'react';

import styles from './program.module.css';
import {Button} from "@chakra-ui/react";

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
        content: ["All of the above:","Frontend", "Backend"]
    }
]
const Program = () => {
    return (
        <div className={styles.carouselContainer}>

            {carouselData.map((item, index) => (

                <div className={styles.carouselItem} key={index}>
                    <div>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.price}>Kurs müddəti: {item.price}</p>
                        <div className={styles.items}>
                            {item.content.map((i,index) => (
                                <p className={styles.content} key={index}>
                                    {i}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button className={styles.qeydiyyat} color={"#a8b3cf"}>Daha Çox</Button>
                    </div>
                </div>

            ))}


        </div>
    );
};

export default Program;
