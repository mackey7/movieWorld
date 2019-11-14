import React from "react"
import styled from 'styled-components'
import { SearchBar } from '../../components/SearchBar/SearchBar'
const TopNavWrapper = styled.nav`
background:#384b55;
padding:20px 0px;
`
const Logo = styled.span`
text-shadow: 2px 0px #fff;
font-size:40px;
font-weight:900;
color:#3d7895;
`
export const TopNav = () => {
    return (
        <TopNavWrapper>
            <Logo>Movie Word</Logo>
            <SearchBar />
        </TopNavWrapper>
    )
}