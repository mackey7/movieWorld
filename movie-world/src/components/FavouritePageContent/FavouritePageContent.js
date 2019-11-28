import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.section`
min-height:100vh;
background:#111617;
border-bottom:1px solid #fff;
border-top:1px solid #fff;
`
const MainWrapper = Styled.section`
width:80%;
margin: 0 auto;
padding:20px 0px;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
`

export const FavouritePageContent = () => {
    return (
        <Wrapper>
            <MainWrapper>
                FavouritePageContent
            </MainWrapper>

        </Wrapper>
    )
}