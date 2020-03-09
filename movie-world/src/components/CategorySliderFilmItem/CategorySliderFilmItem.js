import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'


const FilmLink = Styled(Link)`
    text-decoration:none;

`

const Wrapper = Styled.div`
    display:flex;
   height:100%;
    flex-direction:column;
    cursor:pointer;
    margin: 0px 20px;
       filter: brightness(70%);
        &:hover{
        filter: brightness(100%);   
      transform:scale(1.1);
      transition-duration: 700ms;
transition-property: margin-right;
        }
`

const Image = Styled.img`
    max-width:100px;
    margin-bottom:5px;
    margin:0 auto;
`

const MovieName = Styled.span`
    font-size:14px;;
    color:#fff;
    text-align: center;
    padding-top:2px;
`

const MovieCategory = Styled.span`
    font-size:11px ;
    color:#fff;
    text-align: left;
`

export const CategorySliderFilmItem = ({ src, name, category, id }) => {
    return (
        <FilmLink to={`/movie/${id}`}>
            <Wrapper>
                <Image src={`https://image.tmdb.org/t/p/w154/${src}`} />
                <MovieName>
                    {name}
                </MovieName>
                <MovieCategory>
                    {category}
                </MovieCategory>
            </Wrapper>
        </FilmLink>

    )
}