import React from 'react';
import styles from './App.module.css'
import Navi from "../layouts/navi/Navi";
import Header from "../layouts/header/Header";
import MyCarousel from "../layouts/carousel/Carousel";
import WhatsNew from "../layouts/whats new/WhatsNew";
import AskedQuestions from "../layouts/Asked Questions/AskedQuestions";
import ApplicationProcess from "../layouts/applicationProcess/ApplicationProcess";
import Footer from "../layouts/footer/Footer";
import HaveProject from "../layouts/haveProject/HaveProject";


const App = () => {

    return (
        <div className={styles.appContainer}>
           <>
               <Navi/>
               <Header/>
               <MyCarousel/>
               <WhatsNew/>
               <AskedQuestions/>
               <ApplicationProcess/>
               <HaveProject/>
               <Footer/>
           </>
        </div>
    );
};

export default App;
