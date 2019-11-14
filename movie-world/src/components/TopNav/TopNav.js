import React from "react"
import styled from 'styled-components'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { SimpleRow } from '../../handlers/styles'
import { Link } from 'react-router-dom'

const TopNavWrapper = styled.nav`
background:#384b55;
padding:20px 0px;
display:flex;
justify-content:space-around;
min-width:100%;
position:fixed;
`
const Logo = styled.span`
text-shadow: 2px 0px #fff;
font-size:40px;
font-weight:900;
color:#3d7895;
margin-right:10px;
`
const Fav = styled(Link)`
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
                <Logo>Movie Word</Logo>
                <SearchBar />
            </SimpleRow>
            <Fav to="/fav"><i class="fas fa-heart"></i></Fav>


        </TopNavWrapper>
    )
}