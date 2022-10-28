import React, {useEffect, useState} from 'react';
import styles from './registration.module.css';
import Go from "../../../GlobalRouting";
import {useNavigate, useParams} from "react-router-dom";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button, Select,
} from '@chakra-ui/react';


const Registration = () => {

    const navigate = useNavigate();
    const {department} = useParams();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [price,setPrice]=useState("0");
    useEffect(() => {
        if (department === "frontend") {
            setDepartmentName("Frontend")
            return;
        }
        if (department === "backend") {
            setDepartmentName("Backend")
            return;
        }
        if (department === "fullstack") {
            setDepartmentName("Full-stack")
            return;
        }

    }, [department])
    useEffect(()=>{
        if(departmentName==="Frontend"){
            setPrice("300 AZN")
        }
        if(departmentName==="Backend"){
            setPrice("400 AZN")
        }
        if(departmentName==="Full-stack"){
            setPrice("Frontend 300 AZN və   Backend 350 AZN")
        }
    },[departmentName])
    return (
        <div className={styles.registration}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Button onClick={() => {
                        Go.back(navigate)
                    }} className={styles.backButton}>Back</Button>
                    <h1>Axtarlan proqramçı ol</h1>
                    <div></div>
                </div>
                <div className={styles.formContainer}>

                    <Box
                        rounded={'lg'}
                        boxShadow={'lg'}
                        p={0}>
                        <Stack spacing={4}>
                            {/*Ad*/}
                            <FormControl className={styles.formControl} id="firstName" isRequired>
                                <FormLabel>Ad</FormLabel>
                                <Input value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} type="text"/>
                            </FormControl>
                            {/*Soyad*/}
                            <FormControl className={styles.formControl} id="lastName">
                                <FormLabel>Soyad</FormLabel>
                                <Input value={surname} onChange={(e) => {
                                    setSurname(e.target.value)
                                }} type="text"/>
                            </FormControl>
                            {/*Email*/}
                            <FormControl className={styles.formControl} id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} type="email"/>
                            </FormControl>
                            {/*Bolme*/}
                            <FormControl className={styles.formControl}>
                                <FormLabel
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
                            <Stack spacing={10} >
                                <Button
                                    className={styles.submitButton}
                                    loadingText="Submitting"
                                    size="lg"
                                >
                                    Təsdiqlə
                                </Button>
                            </Stack>

                        </Stack>
                    </Box>

                </div>
            </div>
        </div>
    );
};

export default Registration;
