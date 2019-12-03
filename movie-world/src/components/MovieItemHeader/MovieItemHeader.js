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
const Icon = Styled.i`
color:#fff;
font-size:40px;
cursor: pointer;
`

const HeaderContent = Styled.div`
width:80%;
margin:0 auto;
min-height:100vh;
display:flex;
justify-content:space-between;
flex-direction:column;
`

export const MovieItemHeader = () => {
    const historyBack = () => {
        window.history.back();
    }
    return (
        <Wrapper>
            <HeaderContent>
                <div>
                    <Icon onClick={historyBack} className="fas fa-chevron-left"></Icon>
                </div>
                <div>
                    ddd
                </div>
            </HeaderContent>
        </Wrapper>
    )
}