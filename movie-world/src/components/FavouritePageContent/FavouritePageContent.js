import React from 'react'
import Styled from 'styled-components'
import { FavouritePageMovieItem } from '../FavouritePageMovieItem/FavouritePageMovieItem'
import ScrollAnimation from 'react-animate-on-scroll';

const Wrapper = Styled.section`
min-height:100vh;
background:#111617;
border-bottom:1px solid #fff;
border-top:1px solid #fff;
`
const MainWrapper = Styled.section`
width:80%;
margin: 0 auto;
padding:20px 0px;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
`
const Title = Styled.h2`
text-align:center;
color:#fff;
font-size:40px;
background:#eb4e7a;
padding:10px;
font-weight:100;

`
export const FavouritePageContent = () => {
    return (
        <Wrapper>
            <ScrollAnimation animateIn="fadeInDownBig" animateOnce={true}>
                <Title> Favourite</Title>
            </ScrollAnimation>
            <MainWrapper>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
                    <  FavouritePageMovieItem src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" category="Animation | Adventure" name=" Barbie: Dolphin Magic" />
                </ScrollAnimation>


            </MainWrapper>

        </Wrapper>
    )
}