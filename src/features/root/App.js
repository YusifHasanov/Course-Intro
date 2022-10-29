import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import Dashboard from "./Dashboard";
import axios from "axios";

const App = () => {
    const [data,setData] = useState(null);
    const [sent, setSent] = useState(false);
    const [text, setText] = useState('Message');
    useEffect(() => {
        callBackendAPI()
            .then(res => setData({ data: res.express }))
            .catch(err => console.log(err));
        // handleSend().then(r => console.log(r)).catch(e => console.log(e));
    }, [])
    const handleSend = async () => {
        setSent(true);
        try {
            const res = await axios.post('/send_email', {text});

            console.log(res);
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    const callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
     };

    return (
        <div className={styles.appContainer}>
            <Dashboard/>
        </div>
    );
};

export default App;
