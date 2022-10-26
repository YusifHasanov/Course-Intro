import
{
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {FaFacebookF} from 'react-icons/fa';

import styles from './footer.module.css'
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";



const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{base: 'column', md: 'row'}}
                spacing={4}
                justify={{base: 'center', md: 'space-between'}}
                align={{base: 'center', md: 'center'}}>
                <div className={styles.footerImage}></div>
                <Text>© 2022 course-content beta version</Text>
                <div className={styles.socials}>
                    <a rel="noreferrer" className={styles.socialLink} target={"_blank"}
                       href="https://www.instagram.com/rahmaniftaliyev/"><AiFillInstagram
                        className={styles.socialIcon}/></a>
                    <a rel="noreferrer" className={styles.socialLink} target={"_blank"}
                       href="https://www.facebook.com/rahmaniftaliyev"><FaFacebookF className={styles.socialIcon}/></a>
                    <a rel="noreferrer" className={styles.socialLink} target={"_blank"}
                       href="https://github.com/RahmaNiftaliyev"><AiFillGithub className={styles.socialIcon}/></a>
                </div>
            </Container>
        </Box>
    );
}
export default Footer;