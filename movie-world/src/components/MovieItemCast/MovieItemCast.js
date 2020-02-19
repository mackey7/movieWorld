import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const Item = Styled.div`
width: 200px;
height: 300px;
`

export const MovieItemCast = ({ data, indexOfSwiper }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    };
    return (
        <WrapperSection>
            <Wrapper>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <Title>Cast</Title>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>

                    {data ?
                        <Slider {...settings}>

                            {data.map((person, i) => {

                                return (
                                    <MovieItem key={person.id} >

                                        <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w154/${person.profile_path}`} alt={person.name} />
                                        <h3 className="swiper-slide__title">{person.name}</h3>

                                    </MovieItem >
                                );

                            })}


                        </Slider >


                        :
                        <p >No cast found :(</p>
                    }


                </ScrollAnimation>




            </Wrapper >
        </WrapperSection >
    )
}