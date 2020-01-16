import React from 'react'
import Styled from 'styled-components'
import 'swiper/css/swiper.css'
import '../../styles/carousel.scss'

const Image = Styled.img`
/* height:500px;
width:100%;
margin:0;
padding:0; */
`
const ImageFigure = Styled.figure`
/* margin:0;
padding:0;
position:relative; */
`
const Figcaption = Styled.figcaption`
/* left:0;
bottom:0;
position:absolute;
padding: 30px;
font-size:40px;
color:#fff;
font-weight:700; */
`



export const Slide = ({ title, img }) => {
    return (
        <ImageFigure>
            <Image src={`https://image.tmdb.org/t/p/original/${img}`} />
            <Figcaption>{title}</Figcaption>
        </ImageFigure>
    )
}