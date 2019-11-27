import React from 'react'
import Styled from 'styled-components'

const Image = Styled.img`
height:92vh;
width:100%;
margin:0;
padding:0;
`
const ImageFigure = Styled.figure`
margin:0;
padding:0;
position:relative;
`
const Figcaption = Styled.figcaption`
left:0;
bottom:0;
position:absolute;
padding: 30px;
font-size:40px;
color:#fff;
font-weight:700;
`



export const Slide = () => {
    return (
        <ImageFigure>
            <Image src="https://image.tmdb.org/t/p/original/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg" />
            <Figcaption>An elephant at sunset</Figcaption>
        </ImageFigure>
    )
}