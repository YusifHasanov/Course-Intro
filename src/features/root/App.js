import React from 'react';
import styles from './App.module.css'
import Navi from "../layouts/navi/Navi";
import Header from "../layouts/header/Header";
import TimePrice from "../layouts/timeprice/TimePrice";
import AskedQuestions from "../layouts/Asked Questions/AskedQuestions";
import SuccessHistory from "../layouts/successhistory/SuccessHistory";
import Footer from "../layouts/footer/Footer";
import HaveProject from "../layouts/haveProject/HaveProject";
import Program from "../layouts/program/Program";


const App = () => {

    return (
        <div className={styles.appContainer}>
           <>
               <Navi/>
               <Header/>
               <Program/>
               <TimePrice/>
               <AskedQuestions/>
               <SuccessHistory/>
               <HaveProject/>
               <Footer/>
           </>
        </div>
    );
};

export default App;
