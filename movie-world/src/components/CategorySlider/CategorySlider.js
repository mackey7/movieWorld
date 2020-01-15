import React, { useState } from 'react';
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'

import Swiper from 'swiper';
import 'swiper/css/swiper.css'

import '../../styles/carousel.scss'

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
    text-transform:uppercase;  
     color:#e1e1e1;
    font-weight:100;
    letter-spacing:2px;
`
const Loader = Styled.div`
    margin:0 auto;
    color:#e1e1e1;
    letter-spacing:5px;
    font-weight:100;
`
const SeparateLine = Styled.div`
margin:50px auto;
width:70%;
height:2px;
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0.24693627450980393) 0%, rgba(136,136,136,1) 52%, rgba(255,255,255,0.19371498599439774) 100%);
`

class CategorySlider extends React.Component {
    render() {
        (() => {
            const sliderEl = document.querySelectorAll(".swiper-container");

            sliderEl.forEach((slides, index) => {
                const slider = new Swiper(slides, {
                    init: true,
                    loop: true,
                    spaceBetween: 10,
                    observer: true,

                    breakpoints: {
                        1145: {
                            slidesPerView: 8
                        },
                        699: {
                            slidesPerView: 3
                        }
                    },
                    navigation: {
                        nextEl: `.swiper-button-next${index}`,
                        prevEl: `.swiper-button-prev${index}`
                    }
                });
            });
        })();

        return (
            <SliderContainer>
                <SliderWrapper>
                    <div className="carousel-container" >
                        <CategoryName> {this.props.CategoryTitle}</CategoryName>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.props.data !== undefined && this.props.data.length > 0 ? (
                                    this.props.data.map((item, key) => {
                                        return (
                                            <div key={key} className="swiper-slide">
                                                <CategorySliderFilmItem
                                                    src={item.poster_path}
                                                    category={item.media_type}
                                                    name={item.title}
                                                    id={item.id}
                                                />
                                            </div>
                                        );
                                    })
                                ) : (
                                        <Loader>Loading...</Loader>
                                    )}
                            </div>
                        </div>

                        <div
                            className={`swiper-button-prev${this.props.indexOfSwiper}`}
                        ></div>
                        <div
                            className={`swiper-button-next${this.props.indexOfSwiper}`}
                        ></div>
                    </div>
                </SliderWrapper>
                <SeparateLine> </SeparateLine>
            </SliderContainer >
        );
    }
}

export default CategorySlider;