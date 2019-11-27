import React from 'react'
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'


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
                <CategoryName>
                    {CategoryTitle}
                </CategoryName>
                <MainConatiner>
                    <Icon className="fas fa-chevron-left"></Icon>
                    <Slider>
                        < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                        < CategorySliderFilmItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                    </Slider>
                    <Icon className="fas fa-chevron-right"></Icon>
                </MainConatiner>

            </SliderWrapper>
        </SliderContainer>
    )
}