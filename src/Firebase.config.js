
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDU7YkAN7GwPSkX5ceUq1-hAxkY6hNDRjI",
    authDomain: "courseintro-79640.firebaseapp.com",
    projectId: "courseintro-79640",
    storageBucket: "courseintro-79640.appspot.com",
    messagingSenderId: "790905692439",
    appId: "1:790905692439:web:c0535e0e4dd946909dd752",
    measurementId: "G-98B5899V8Z"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);