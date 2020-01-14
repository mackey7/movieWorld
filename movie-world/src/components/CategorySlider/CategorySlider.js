import React, { useState } from 'react';
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'
import ScrollAnimation from 'react-animate-on-scroll';
// import Swiper from 'react-id-swiper';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
import { Link } from 'react-router-dom'
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



const Slider = Styled.div`
    display:flex;
    flex-direction:row;
    max-width:80%;
    margin: 40px auto;
`

const CC = Styled.div`
color:red;
`
const CategoryName = Styled.span`
    color:#fff;
`

class CategorySlider extends React.Component {
    render() {
        (() => {
            const sliderEl = document.querySelectorAll('.swiper-container');
            if (!sliderEl) {
                return;
            }
            const slider = new Swiper(sliderEl, {
                init: true,
                slidesPerView: 2,
                loop: true,
                spaceBetween: 14,
                observer: true,

                breakpoints: {
                    1145: {
                        slidesPerView: 7
                    },
                    699: {
                        slidesPerView: 3
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        })();
        return (
            < SliderContainer>
                <div className="carousel-container wow fadeIn" data-wow-duration="3s">
                    <CategoryName> {this.props.CategoryTitle}</CategoryName>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.props.data !== undefined && this.props.data.length > 0 ?
                                this.props.data.map((item, key) => {
                                    return (
                                        <div key={key} className="swiper-slide">
                                            <Link to={`/movie/${item.id}`} >
                                                < CategorySliderFilmItem src={item.poster_path} category={item.media_type} name={item.title} />
                                            </Link>
                                        </div >
                                    )
                                }) : <p>LOADING...</p>
                            }
                        </div>
                    </div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>
            </SliderContainer>

        )
    }
}

export default CategorySlider