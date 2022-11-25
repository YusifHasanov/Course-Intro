import React, {useState} from 'react';
import styles from './navi.module.css';
import {FaBars} from "react-icons/fa";
import {Collapse, IconButton, useDisclosure} from "@chakra-ui/react";
import Modal from "../../components/MessageModal/Modal";

//
// const hrefRenderingObj = {
//     header: 'header',
//     teleblerimiz: 'teleblerimiz',
//     dersler: 'dersler',
//     questions: 'questions'
// }


const DesktopNavi = ({isClicked,setIsClicked}) => {

    return (
        <div className={styles.navRight}>
            <ul className={styles.navList}>
                <li><a rel={"tag"} href={"#header"}>Ana səhifə</a></li>
                <li><a rel={"tag"} href={"#teleblerimiz"}>Proqram</a></li>
                <li><a rel={"tag"} href={"#dersler"}>Dərslər</a></li>
                <li><a rel={"tag"} href={"#questions"}>Suallar</a></li>
            </ul>
            <button onClick={()=>{setIsClicked(p=>!p)}} className={styles.applyBtn}>Əlaqə</button>
        </div>
    )
}
const MobileNavi = ({isClicked,setIsClicked}) => {
    const {isOpen: OpenMenu, onToggle: MenuToggle} = useDisclosure();
    return (
        <div className={styles.mobileNaviContainer}>
            <div className={styles.mobileNavi}>
                <IconButton onClick={MenuToggle} colorScheme={"blackAlpha"} icon={<FaBars className={styles.bar}/>}/>
                <button onClick={()=>{setIsClicked(p=>!p)}} className={styles.applyBtn}>Əlaqə</button>
            </div>
            <Collapse in={OpenMenu}>
                <ul className={styles.collapseMenuList}>
                    <li><a onClick={MenuToggle} rel={"tag"} href={"#header"}>Ana shifə</a></li>
                    <li><a onClick={MenuToggle} rel={"tag"} href={"#teleblerimiz"}>Tələblər</a></li>
                    <li><a onClick={MenuToggle} rel={"tag"} href={"#dersler"}>Dersler</a></li>
                    <li><a onClick={MenuToggle} rel={"tag"} href={"#questions"}>Suallar</a></li>
                </ul>
            </Collapse>
        </div>
    )
}
const Navi = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div id={"nav"} className={styles.navContainer}>

            <div className={styles.navIconDiv}>
            </div>
            <div></div>
            <DesktopNavi isClicked={isClicked} setIsClicked={setIsClicked}/>
            <MobileNavi isClicked={isClicked} setIsClicked={setIsClicked}/>
            {isClicked && <Modal changeShow={()=>{setIsClicked(false)}} show={isClicked}/>}
        </div>
    );
};

export default Navi;
