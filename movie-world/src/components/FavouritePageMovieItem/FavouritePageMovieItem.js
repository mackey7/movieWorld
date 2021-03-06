import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = Styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    cursor:pointer;
    margin: 20gitpx 20px;
    color:#d8d8d8;
    text-decoration:none;
    &:hover{
        transform:scale(1.1) ;
        color:#fff;
    }
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
    text-decoration:none;
    text-align: left;
`

export const FavouritePageMovieItem = ({ src, title, id }) => {
    return (
        <Link to={`/movie/${id}`}>
            <Wrapper>
                <Image src={src} />
                <MovieName>
                    {title}
                </MovieName>
            </Wrapper>
        </Link>
    )
}