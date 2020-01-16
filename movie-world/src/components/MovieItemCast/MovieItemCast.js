import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'

import '../../styles/carousel.scss'


const Title = Styled.h2`
text-transform:uppercase;
letter-spacing: 4px;`

const WrapperSection = Styled.section`
color:#fff;
background:#161130;
padding:10px 0px 30px  0px;;
margin:0;
`
const Wrapper = Styled.div`
width:80%;
margin:0 auto;
`
const CaruselWrapper = Styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const CaruselSection = Styled.div`
display:flex;
`
const Icon = Styled.i`
color:#007aff;
font-size:40px;
cursor:pointer;
`
const MovieItem = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0px 20px;
opacity:.5;
cursor:pointer;
span{
    padding-top:10px;
}

&:hover{
    opacity:1;
}
`
const Img = Styled.img`
width:100px;
border-radius:30px;
`

export const MovieItemCast = ({ data, indexOfSwiper }) => {
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
        <WrapperSection>
            <Wrapper>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <Title>Cast</Title>
                </ScrollAnimation>
                <CaruselWrapper>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1} >
                        <Icon className="fas fa-chevron-left"></Icon>
                    </ScrollAnimation>
                    <CaruselSection>
                        {console.log(data)}
                        {data ?
                            <div className="swiper-container">

                                <div className="swiper-wrapper">
                                    {data.map((person, i) => {

                                        return (
                                            <div key={person.id} className="swiper-slide">

                                                <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w154/${person.profile_path}`} alt={person.name} />
                                                <h3 className="swiper-slide__title">{person.name}</h3>

                                            </div>
                                        );

                                    })}


                                </div>

                                <div
                                    className={`swiper-button-prev${indexOfSwiper}`}
                                ></div>
                                <div
                                    className={`swiper-button-next${indexOfSwiper}`}
                                ></div>
                            </div>
                            :
                            <p className="people-carousel-container-error">No cast found :(</p>
                        }




                    </CaruselSection>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1} >
                        <Icon className="fas fa-chevron-right"></Icon>
                    </ScrollAnimation>
                </CaruselWrapper>
            </Wrapper>
        </WrapperSection>
    )
}