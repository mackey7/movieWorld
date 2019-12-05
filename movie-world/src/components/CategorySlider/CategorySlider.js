import React from 'react'
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'
import ScrollAnimation from 'react-animate-on-scroll';

const SliderContainer = Styled.section`
background:#3d2f87;
padding:20px 0px;
`
const SliderWrapper = Styled.div`
margin:0 auto;

font-size:24px;
font-weight:700;
width:80%;
`

const CategoryName = Styled.span`
color:#fff;
`
const Icon = Styled.i`
color:#0773eb;
font-size:70px;
`
const MainConatiner = Styled.div`
padding:30px 0px;;
display:flex;
justify-content: space-between;
align-items:center;
`
const Slider = Styled.div`
display:flex;
flex-direction:row;
`


export const CategorySlider = ({ CategoryTitle }) => {
    return (
        <SliderContainer>
            <SliderWrapper>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <CategoryName>
                        {CategoryTitle}
                    </CategoryName>
                </ScrollAnimation>
                <MainConatiner>
                    <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                        <Icon className="fas fa-chevron-left"></Icon>
                    </ScrollAnimation>
                    <Slider>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                            < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                            < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                            < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                            < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        </ScrollAnimation>

                    </Slider>
                    <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
                        <Icon className="fas fa-chevron-right"></Icon>
                    </ScrollAnimation>
                </MainConatiner>

            </SliderWrapper>
        </SliderContainer >
    )
}