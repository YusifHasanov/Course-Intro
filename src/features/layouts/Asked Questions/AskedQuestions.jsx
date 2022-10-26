import React from 'react';
import styles from './asked.module.css';
import vector from './../../assets/vector.png'
import {Collapse, useDisclosure} from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai";

const AskedQuestions = () => {

    const {isOpen: howApply, onToggle: applyToggle} = useDisclosure();
    const {isOpen: personCompany, onToggle: personCompanyToggle} = useDisclosure();
    const {isOpen: compensated, onToggle: compensatedToggle} = useDisclosure();
    const {isOpen: increaseChance, onToggle: increaseChanceToggle} = useDisclosure();

    return (
        <div className={styles.askedQuestions}>
            <div className={styles.title}>
                <h4>Ən çox verilən suallar</h4>
                <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut
                    bibendum non, gravida non libero.
                </p>
            </div>
            <div>
                <div className={styles.questions}>
                    <>
                        <div className={styles.question}>
                            Frontend-dən başlamalıyam yoxsa Backend-dən?
                            <AiOutlinePlus className={styles.plus} onClick={applyToggle}/>
                        </div>
                        <Collapse in={howApply}>
                            <div className={styles.collapse}>
                                Frontend, vebsayta daxil olduğunuz zaman qarşılıqlı əlaqədə olduğunuz interfeysin
                                dizaynı və inkişafı, backend biznesin server hissəsinə və bu vebsaytın pərdə arxasında
                                baş verən əsas proqram təminatının inkişafına verilən addır. Artıq seçim sizə aiddir maraq dairənizə görə seçimiizi edin və dərslərimizə qoşulun
                            </div>
                        </Collapse>
                    </>
                    <>
                        <div className={styles.question}>
                            Dərslər hansı şəkildə keçirilir?
                            <AiOutlinePlus className={styles.plus} onClick={personCompanyToggle}/>
                        </div>
                        <Collapse in={personCompany}>
                            <div className={styles.collapse}>
                                Dərslərimiz online şəkildə, həftədə 3 dəfə 2 saat olmaqla Microsoft Teams platforması
                                üzərindən keçirilir.
                            </div>
                        </Collapse>
                    </>
                    <>
                        <div className={styles.question}>
                            How will I be compensated?
                            <AiOutlinePlus className={styles.plus} onClick={compensatedToggle}/>
                        </div>
                        <Collapse in={compensated}>
                            <div className={styles.collapse}>sdasdasdasdas</div>
                        </Collapse>
                    </>
                    <>
                        <div className={styles.question}>
                            How can I increase my chances of getting funded?
                            <AiOutlinePlus className={styles.plus} onClick={increaseChanceToggle}/>
                        </div>
                        <Collapse in={increaseChance}>
                            <div className={styles.collapse}>sdasdasdasdas</div>
                        </Collapse>
                    </>
                </div>
            </div>
        </div>
    );
};

export default AskedQuestions;
