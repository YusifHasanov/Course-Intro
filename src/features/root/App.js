import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css'
import Dashboard from "./Dashboard";
import{selectAllRegisters} from "./../redux/slices/RegisterSlice";

const App = () => {
    const data=useSelector(selectAllRegisters); 
    // const [departments, setDepartments] = useState([]);
    // const departmentCollection = collection(db, "Departments");
    //
    // useEffect(() => {
    //     const getDepartments = async () => {
    //         const users = await getDocs(departmentCollection);
    //         setDepartments(users.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //         return   users;
    //     }
    //     getDepartments().then(r => console.log(r));
    // }, [])

// useEffect(() => {
//     console.log(data);
// },[data])
    return (
        <div className={styles.appContainer}>
            <Dashboard/>
        </div>
    );
};

export default App;
