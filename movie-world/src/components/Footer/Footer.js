import React from 'react'
import Styled from 'styled-components'

const FooterContainer = Styled.footer`
background: #131517;
padding:20px 0px;
min-width:100%;
`

const FooterWrapper = Styled.div`
width:100%;
color:#fff;
display:flex;
justify-content: space-around;
align-items:center;
`
const Logo = Styled.span`
font-size:30px;
font-weight:900;
`

const Icon = Styled.i`
font-size:26px;
padding-left:20px;
color:#b9b9ba;
cursor:pointer;

&:hover{
    color:#fff;
}

`
export const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>
                    Movie World

                </Logo>
                <div>
                    <Icon className="fab fa-twitter"></Icon>
                    <Icon className="fab fa-facebook"></Icon>
                </div>

            </FooterWrapper>
        </FooterContainer>

    )
}
