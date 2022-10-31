import React, {useState} from 'react'
import styles from './haveProject.module.css';
import arrow from './../../assets/vector.png'
import Modal from "../../components/MessageModal/Modal";

const HaveProject = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            {isClicked && <Modal changeShow={()=>{setIsClicked(false)}} show={isClicked}/>}
            <div className={styles.projectContainer}>
                <div className={styles.project}>
                    <p>Tərəddüd edirsən?</p>
                    <h2>Qeydiyyatdan keç və səndə ailəmizə qoşul.</h2>
                    <button onClick={()=>{setIsClicked(p=>!p)}}>
                        Əlaqə
                        <img className={"project-arrow"} src={arrow} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HaveProject
