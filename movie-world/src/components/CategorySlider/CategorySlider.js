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


export const CategorySlider = ({ CategoryTitle }) => {

    const MovieArray = [
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" },
        { 'src': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "category": "Animation | Adventure", "name": "Barbie: Dolphin Magic" }

    ]

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

    const pages =
        MovieArray.map((item, key) => {
            return (
                < div >
                    < CategorySliderFilmItem src={item.src} category={item.category} name={item.name} />
                </div >
            )
        })

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