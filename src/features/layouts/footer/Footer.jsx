import
{
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import {FaFacebookF} from 'react-icons/fa';

import styles from './footer.module.css'
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";


const SocialButton = () => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            // href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden></VisuallyHidden>
            {/*{children}*/}
        </chakra.button>
    );
};

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
                    <a className={styles.socialLink} target={"_blank"}
                       href="https://www.instagram.com/rahmaniftaliyev/"><AiFillInstagram
                        className={styles.socialIcon}/></a>
                    <a className={styles.socialLink} target={"_blank"}
                       href="https://www.facebook.com/rahmaniftaliyev"><FaFacebookF className={styles.socialIcon}/></a>
                    <a className={styles.socialLink} target={"_blank"}
                       href="https://github.com/RahmaNiftaliyev"><AiFillGithub className={styles.socialIcon}/></a>
                </div>
            </Container>
        </Box>
    );
}
export default Footer;