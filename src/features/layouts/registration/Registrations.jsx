import React, {useEffect, useState} from 'react';
import styles from './registration.module.css';
import Go from "../../../GlobalRouting";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, FormControl, FormLabel, Input, Select, Stack,} from '@chakra-ui/react';
import Regex from '../../../Regex';
import {useSelector} from "react-redux";
import {selectAllUsers, useAddUserMutation} from "../../redux/slices/UserSlice";
import {nanoid} from "@reduxjs/toolkit";



const Registration = () => {
    const allUsers = useSelector(selectAllUsers);
    const navigate = useNavigate();
    const {department} = useParams();
    const [exist, setExist] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [price, setPrice] = useState("0");
    const [addUser]=useAddUserMutation();
    const isDisabled = name !== "" && surname !== "" && Regex.email(email) && departmentName !== "" && price !== "0";


    const submitHandle = (e) => {
        e.preventDefault();
        const data = {
            id:nanoid(),
            Name: name,
            Surname: surname,
            Email: email,
            DepartmentName: departmentName,
            Date: new Date().toISOString(),
        }
        if (exist) {
            addUser(data);
            alert("User added");
            return
        }
            alert("Bu email adresi ile daha önce kayıt yapılmıştır.")
    }
    useEffect(() => {
        setExist(Boolean(allUsers.find(user => user.Email === email)));
    }, [email,allUsers]);
    useEffect(() => setDepartmentName(department), [department])

    useEffect(() => {
        setPrice(departmentName === "Frontend" ? "300 AZN" : departmentName === "Backend" ? "400 AZN" : departmentName === "Full-stack" ? "Frontend: 300 & Backend: 350 AZN" : "0")
    }, [departmentName])


    return (
        <div className={styles.registration}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Button onClick={() => {
                        Go.back(navigate)
                    }} className={styles.backButton}>Back</Button>
                    <h1>Axtarılan proqramçı ol</h1>
                    <div></div>
                </div>
                <div className={styles.formContainer}>

                    <form action="" onSubmit={submitHandle}>
                        <Box
                            rounded={'lg'}
                            boxShadow={'lg'}
                            p={0}>
                            <Stack spacing={4}>

                                {/*Ad*/}
                                <FormControl className={styles.formControl} id="firstName" isRequired>
                                    <FormLabel color={"#fff"}>Ad</FormLabel>
                                    <Input value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} type="text"/>
                                </FormControl>
                                {/*Soyad*/}
                                <FormControl className={styles.formControl} id="lastName" isRequired>
                                    <FormLabel color={"#fff"}>Soyad</FormLabel>
                                    <Input value={surname} onChange={(e) => {
                                        setSurname(e.target.value)
                                    }} type="text"/>
                                </FormControl>
                                {/*Email*/}
                                <FormControl className={styles.formControl} id="email" isRequired>
                                    <FormLabel color={"#fff"}>Email</FormLabel>
                                    <Input value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} type="email"/>
                                </FormControl>
                                {/*Bolme*/}
                                <FormControl className={styles.formControl}>
                                    <FormLabel color={"#fff"}
                                        htmlFor={"department"}>
                                        Bölmə
                                    </FormLabel>
                                    <Select
                                        value={departmentName}
                                        onChange={(e) => {
                                            setDepartmentName(e.target.value)
                                        }}
                                        className={styles.select}
                                        id={"department"}
                                        name={"department"}
                                        autoComplete={"country"}
                                        placeholder={"Bölmə seçin"}
                                        shadow="sm"
                                        w="full"
                                        rounded="md">
                                        <option className={styles.option}>Frontend</option>
                                        <option className={styles.option}>Backend</option>
                                        <option className={styles.option}>Full-stack</option>
                                    </Select>
                                    <div className={styles.priceBox}>
                                        Aylıq ödəniş: <span className={styles.price}>{price}</span>
                                    </div>
                                </FormControl>
                                <Stack spacing={10}>
                                    <Button
                                        className={styles.submitButton}
                                        loadingText="Submitting"
                                        size="lg"
                                        disabled={!isDisabled}
                                        type={"submit"}
                                    >
                                        Təsdiqlə
                                    </Button>
                                </Stack>


                            </Stack>
                        </Box>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
