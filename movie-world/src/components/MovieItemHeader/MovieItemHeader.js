import React from 'react'
import Styled from 'styled-components'
import { Animated } from "react-animated-css";

const Wrapper = Styled.header`
min-width:100%;
height:100vh;
background-image: url(${props => props.bgUrl});
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



export const MovieItemHeader = ({ data, addTofavourite }) => {
    const historyBack = () => {
        window.history.back();
    }
    return (
        <Wrapper bgUrl={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}>
            <HeaderContent>
                <div>
                    <Animated animationIn="bounceInLeft" >
                        <Icon onClick={historyBack} className="fas fa-chevron-left"></Icon>
                    </Animated>
                </div>
                <HeaderContentBottom>
                    <MovieDetailsContainer>
                        <Animated animationIn="bounceInLeft" >
                            <MoviePoster src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`} />
                        </Animated>
                        <Animated animationIn="bounceInRight" >
                            <MovieDetails>
                                <h2> {data.original_title}</h2>
                                <span> {data.vote_average}</span>
                                <span>{data.status} | {data.original_language}</span>
                            </MovieDetails>
                        </Animated>

                    </MovieDetailsContainer>
                    <Animated animationIn="bounceInRight" >
                        <HeartIcon onClick={addTofavourite} className="fas fa-heart"></HeartIcon>
                    </Animated>
                </HeaderContentBottom>
            </HeaderContent>
        </Wrapper >
    )
}