import React from "react"
import styled from 'styled-components'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { SimpleRow } from '../../handlers/styles'


const TopNavWrapper = styled.nav`
background:#384b55;
padding:20px 0px;
display:flex;
justify-content:space-around;
min-width:100%;
`
const Logo = styled.span`
text-shadow: 2px 0px #fff;
font-size:40px;
font-weight:900;
color:#3d7895;
margin-right:10px;
`
export const TopNav = () => {
    return (
        <TopNavWrapper>
            <SimpleRow>
                <Logo>Movie Word</Logo>
                <SearchBar />
            </SimpleRow>


        </TopNavWrapper>
    )
}