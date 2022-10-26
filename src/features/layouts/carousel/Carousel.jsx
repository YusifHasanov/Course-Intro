import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './carousel.module.css';
import { Pagination } from "swiper";
const carouselData = [
    {
        subtitle: 'Crowdfund',
        title: 'Funding rates page',
        price: 'Funding amount: $5,000 - $6,000',
        content: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.'

    },
    {
        subtitle: 'Crowdfund',
        title: 'Funding rates page',
        price: 'Funding amount: $5,000 - $6,000',
        content: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.'

    }, {
        subtitle: 'Crowdfund',
        title: 'Funding rates page',
        price: 'Funding amount: $5,000 - $6,000',
        content: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.'

    },{
        subtitle: 'Crowdfund',
        title: 'Funding rates page',
        price: 'Funding amount: $5,000 - $6,000',
        content: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.'

    },
]
const MyCarousel = () => {
    return (
        <div className={styles.carouselContainer}>
            <Swiper

                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }} modules={[Pagination]}
            >
                {carouselData.map((item, index) => (
                    <SwiperSlide>
                        <div className={styles.carouselItem}>
                            <div>
                                <p className={styles.subtitle}>{item.subtitle}</p>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.price}>{item.price}</p>
                                <p className={styles.content}>
                                    {item.content}
                                </p>
                            </div>
                            <div>asdasdd</div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default MyCarousel;
