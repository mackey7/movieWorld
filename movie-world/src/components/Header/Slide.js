import React from 'react'
import Styled from 'styled-components'


const Image = Styled.img`
    max-height:70vh;
    height:100%;
    width:100%;
    max-width:200%
    margin:0;
    padding:0;
`
const ImageFigure = Styled.figure`
    margin:0;
    padding:0;
    position:relative;
`
const Figcaption = Styled.figcaption`
    left:60px;
    bottom:30px;
    position:absolute;
    font-size:40px;
    color:#fff;
    font-weight:700;
`



export const Slide = ({ title, img }) => {
    return (
        <div>
            <ImageFigure>
                <Image src={`https://image.tmdb.org/t/p/original/${img}`} />
                <Figcaption>{title}</Figcaption>
            </ImageFigure>
        </div>
    )
}