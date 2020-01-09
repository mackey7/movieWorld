import React, { useState } from 'react';
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'
import ScrollAnimation from 'react-animate-on-scroll';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

const SliderContainer = Styled.section`
    background:#3d2f87;
    padding:20px 0px;
`
const SliderWrapper = Styled.div`
    margin:0 auto;
    font-size:24px;
    font-weight:700;
    max-width:80%;
`

const CategoryName = Styled.span`
    color:#fff;
`

const MainConatiner = Styled.div`
    /* padding:30px 0px;;
    display:flex;
    justify-content: space-between;
    align-items:center; */
`
const Slider = Styled.div`
    display:flex;
    flex-direction:row;
    max-width:80%;
    margin: 40px auto;
`


export const CategorySlider = ({ CategoryTitle, data }) => {

    const params = {
        init: true,
        slidesPerView: 5,
        loop: false,
        spaceBetween: 50,
        observer: true,
        breakpoints: {
            768: {
                slidesPerView: 5
            },
            640: {
                slidesPerView: 3
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    const pages = data !== undefined && data.length > 0 ?
        data.map((item, key) => {
            return (
                < div key={key} >
                    < CategorySliderFilmItem src={item.poster_path} category={item.media_type} name={item.title} />
                </div >
            )
        }) : console.log("err")



    // 

    return (
        <SliderContainer>
            <SliderWrapper>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <CategoryName>
                        {CategoryTitle}
                    </CategoryName>
                </ScrollAnimation>
                <Slider>
                    <Swiper {...params} >
                        {pages}
                    </Swiper>
                </Slider>
            </SliderWrapper>
        </SliderContainer >
    )
}