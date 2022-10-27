import React, {useState} from 'react';
import styles from './header.module.css';
import headerLine from './../../assets/headerLine.png'
import downArrow from './../../assets/downArrow.png';
import {BsArrowRight, BsPerson} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";
import vector from "../../assets/vector.png";
import manat from './../../assets/manat.png'
import Regex from "../../../Regex";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, FormControl, FormLabel, InputGroup, InputLeftElement, Input, Textarea,
} from '@chakra-ui/react'


const Header = () => {
        const {isOpen, onOpen, onClose} = useDisclosure()
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')
        const [error, setError] = useState(false);
        const disabled = [name, email, message].includes('') || error;

        const HandleSubmit = (e) => {
            onClose();
            e.preventDefault()
        };

        const CheckEmail = (value) => {
            setEmail(value)
            setError(!Regex.email(value));
        };
        return (
            <div id={"header"} className={styles.header}>

                <h1>Silikon vadisində React developer all
                    <img src={headerLine} alt=""/>
                </h1>
                <div className={styles.buttons}>
                    <button className={styles.discover}>Kurslar</button>
                    <button onClick={onOpen} className={styles.applyGrant}>Əlaqə <BsArrowRight
                        className={styles.rightArrow}/></button>
                    <Modal  isOpen={isOpen} onClose={onClose} >

                          <ModalOverlay/>
                          <ModalContent  backgroundColor={"#0E1217"}>
                              <ModalHeader style={{textAlign: 'center'}}>Əlaqə</ModalHeader>
                              <ModalCloseButton className={styles.closeButton}/>
                              <ModalBody>
                                  <form action="" onSubmit={HandleSubmit}>
                                      <FormControl isRequired>
                                          <FormLabel>Ad</FormLabel>
                                          <InputGroup>
                                              <InputLeftElement children={<BsPerson/>}/>
                                              <Input value={name} onChange={(e) => {
                                                  setName(e.target.value.trim())
                                              }} type="text" name="name" placeholder="Adınız"/>
                                          </InputGroup>
                                      </FormControl>
                                      <FormControl marginTop={10} isRequired>
                                          <FormLabel>Email</FormLabel>
                                          <InputGroup>
                                              <InputLeftElement children={<MdOutlineEmail/>}/>
                                              <Input
                                                  onChange={(e) => {
                                                      CheckEmail(e.target.value.trim())
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
                                                  setMessage(e.target.value.trim())
                                              }}
                                              value={message}
                                              name="message"
                                              placeholder="Mesajınız"
                                              rows={6}
                                              resize="none"
                                          />
                                      </FormControl>
                                  </form>
                              </ModalBody>
                              <ModalFooter>
                                  <Button className={styles.modalCloseButton} variant='ghost' color={"white"} mr={3}
                                          onClick={onClose}>
                                      Bağla
                                  </Button>
                                  <Button disabled={disabled} onClick={HandleSubmit} type={"submit"}
                                          className={styles.modalSubmitButton}
                                          colorScheme={"green"}
                                  >Təsdiqlə</Button>
                              </ModalFooter>
                          </ModalContent>

                    </Modal>
                </div>
                <div className={styles.millions} id={"teleblerimiz"}>
                    <div>
                        <p>25+</p>
                        <p>Real layihə</p>
                    </div>
                    <div>
                        <p>100% </p>
                        <p>Nəticə </p>
                    </div>
                    <div>
                        <p>1000 <img src={manat} className={styles.manat} alt=""/> +</p>
                        <p>İşlə təminat</p>
                    </div>
                </div>
                <div className={styles.last}>
                    <img src={downArrow} alt=""/>
                    <div className={styles.text}>
                        <h3>Tədris proqrami</h3>
                        <p>Hər bölmə üçün tədris boyunca öyrədiləcək mövzularla aşağıdan tanış ola bilərsiz.</p>
                        <a rel={"nofollow"} href="https://course-intro.netlify.app/">
                            Haqqımızda
                            <img className={styles.rightArrow} src={vector} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
;

export default Header;
