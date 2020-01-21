import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = Styled(Link)`
text-decoration:none;
color:#fff;
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
`

const Img = Styled.img`
max-height:200px;
`

const Title = Styled.p`
text-align:center;
`

export const SearchResultsItem = ({ id, src, title }) => {
    return (
        <Wrapper to={`/movie/${id}`}>

            <Img src={`https://image.tmdb.org/t/p/original/${src}`} />
            <Title>{title} </Title>

        </Wrapper >


    )
}