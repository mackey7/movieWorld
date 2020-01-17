import React from "react"
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import { SimpleRow } from '../../handlers/styles'
import { Link } from 'react-router-dom'
import { Animated } from "react-animated-css";
const TopNavWrapper = styled.nav`
background:#384b55;
padding:20px 0px;
display:flex;
justify-content:space-around;
width:100%;

`
const Logo = styled(Link)`
text-shadow: 2px 0px #fff;
font-size:40px;
font-weight:900;
color:#3d7895;
margin-right:10px;
text-decoration:none;
`
const Fav = styled(Link)`
text-decoration:none;
font-size:40px;
color:#cb0a0a;
&:hover{
color:#e50d0d;
}
`

export const TopNav = () => {
    return (
        <TopNavWrapper>
            <SimpleRow>
                <Animated animationIn="bounceInLeft" >

                    <Logo to="/">
                        Movie Word
                    </Logo>

                </Animated>
                <Animated animationIn="fadeInDownBig" >
                    <SearchBar />
                </Animated>
            </SimpleRow>
            <Animated animationIn="bounceInRight" >
                <Fav to="/Favourite"><i class="fas fa-heart"></i></Fav>
            </Animated>
        </TopNavWrapper >
    )
}