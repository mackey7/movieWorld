import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = Styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    margin: 0px 20px;
`

const Image = Styled.img`
    margin-bottom:5px;
    filter: brightness(50%);
        &:hover{
        filter: brightness(100%);   
        }
`

const MovieName = Styled.span`
    font-size:14px;;
    color:#fff;
    text-align: left;
`

const MovieCategory = Styled.span`
    font-size:11px ;
    color:#fff;
    text-align: left;
`

export const CategorySliderFilmItem = ({ src, name, category }) => {
    return (

        <Wrapper>
            <Link to="/movie/8">
                <Image src={src} />
                <MovieName>
                    {name}
                </MovieName>
                <MovieCategory>
                    {category}
                </MovieCategory>
            </Link>
        </Wrapper>

    )
}