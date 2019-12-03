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
margin-top:70px;
color:#fff;
font-size:60px;
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

const HeaderContentBottom = Styled.div`
margin-bottom:10px;
display:flex;
justify-content:space-between;
align-items:flex-end;
`

const HeartIcon = Styled.i`
color:#fff;
font-size:60px;
cursor: pointer;
&:hover{
    color:#ca2e2e;
}
`
const MoviePoster = Styled.img`
width:140px;
`
const MovieDetailsContainer = Styled.div`
display:flex;
align-items:center;
`
const MovieDetails = Styled.div`
display:flex;
flex-direction:column;
margin-left:30px;
color:#fff;
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
                <HeaderContentBottom>
                    <MovieDetailsContainer>

                        <MoviePoster src="https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg" />

                        <MovieDetails>
                            <h2> Frozen II</h2>
                            <span> 7.1</span>
                            <span> Relased | EN</span>
                            <span> Animation | Family</span>
                        </MovieDetails>


                    </MovieDetailsContainer>

                    <HeartIcon className="fas fa-heart"></HeartIcon>

                </HeaderContentBottom>
            </HeaderContent>
        </Wrapper>
    )
}