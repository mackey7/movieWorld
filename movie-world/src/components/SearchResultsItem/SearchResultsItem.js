import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = Styled(Link)`
text-decoration:none;
color:#fff;
padding:20px;
`

const Img = Styled.img`
max-height:200px;
`

export const SearchResultsItem = ({ id, src, title }) => {
    return (
        <Wrapper to={`/movie/${id}`}>

            <img src={`https://image.tmdb.org/t/p/original/${src}`} />
            <p>{title} </p>

        </Wrapper >


    )
}