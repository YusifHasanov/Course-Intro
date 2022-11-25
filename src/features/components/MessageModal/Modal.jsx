import React, {useEffect, useState} from 'react';
import {
    Button,
    FormControl,
    FormLabel, Input, InputGroup, InputLeftElement,
 Textarea
} from "@chakra-ui/react";
import styles from "./modal.module.css";
import {BsPerson} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";
import Regex from "../../../Regex";
import {AiOutlineClose} from "react-icons/ai";

 const Modal = ({show,changeShow}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false);
    const disabled = [name, email, message].some(i=>i.trim()==="") || error;

    const HandleSubmit = (e) => {
        changeShow();
        e.preventDefault();
    };

    const CheckEmail = (value) => {
        setEmail(value)
        setError(!Regex.email(value));

    };

    return (
     <div className={styles.modalContainer}>
             <div  className={styles.modal}>
                 <h3 className={styles.modalHeader}>Əlaqə</h3>
                 <button onClick={()=>{changeShow()}} className={styles.closeButton} ><AiOutlineClose className={styles.closeIcon}/></button>
                 <div className={styles.modalBody}>
                     <form action="" onSubmit={HandleSubmit}>
                         <FormControl isRequired>
                             <FormLabel>Ad</FormLabel>
                             <InputGroup>
                                 <InputLeftElement children={<BsPerson/>}/>
                                 <Input value={name} onChange={(e) => {
                                     setName(e.target.value)
                                 }} type="text" name="name" placeholder="Adınız"/>
                             </InputGroup>
                         </FormControl>
                         <FormControl marginTop={10} isRequired>
                             <FormLabel>Email</FormLabel>
                             <InputGroup>
                                 <InputLeftElement children={<MdOutlineEmail/>}/>
                                 <Input
                                     onChange={(e) => {
                                         CheckEmail(e.target.value)
                                     }}
                                     value={email}
                                     type="email"
                                     name="email"
                                     placeholder="Email adresiniz"
                                 />
                             </InputGroup>
                         </FormControl>
                         <FormControl marginTop={10} isRequired>
                             <FormLabel>Mesaj</FormLabel>
                             <Textarea
                                 onChange={(e) => {
                                     setMessage(e.target.value)
                                 }}
                                 value={message}
                                 name="message"
                                 placeholder="Mesajınız"
                                 rows={6}
                                 resize="none"
                             />
                         </FormControl>
                     </form>
                 </div>
                 <div className={styles.modalFooter}>
                     <Button onClick={()=>{changeShow()}} className={styles.modalCloseButton} variant='ghost' color={"white"} mr={3}>
                         Bağla
                     </Button>
                     <Button disabled={disabled} onClick={HandleSubmit} type={"submit"}
                             className={styles.modalSubmitButton}
                             colorScheme={"green"}
                     >Təsdiqlə</Button>
                 </div>
             </div>

     </div>
    );
};

export default Modal;
