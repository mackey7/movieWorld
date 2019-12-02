import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.header`
min-width:100%;
height:100vh;
background-image: url("https://image.tmdb.org/t/p/original/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg");
background-repeat:none;
background-position:center;
background-size: 100% 100vh; 

`

export const MovieItemHeader = () => {
    return (
        <Wrapper>

            MovieItemHeader
        </Wrapper>
    )
}