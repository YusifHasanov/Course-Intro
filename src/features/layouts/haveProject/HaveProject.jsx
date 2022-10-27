import React from 'react'
import styles from './haveProject.module.css';
import arrow from './../../assets/vector.png'

const HaveProject = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.project}>
                <p>Tərəddüd edirsən?</p>
                <h2>Qeydiyyatdan keç və səndə ailəmizə qoşul.</h2>
                <button>Əlaqə
                    <img className={"project-arrow"} src={arrow} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default HaveProject
