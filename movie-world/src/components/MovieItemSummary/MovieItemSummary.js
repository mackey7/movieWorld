import React from 'react'
import Styled from 'styled-components'

const WrapperSection = Styled.section`
background: #161130;
width:100%;
height:100%;
padding:100px 0px 30px 0px;
color:#fff;
`
const Wrapper = Styled.section`
width:80%;
margin: 0 auto;
`

const Title = Styled.h2`
text-transform:uppercase;
letter-spacing: 4px;
`


export const MovieItemSummary = () => {
    return (
        <WrapperSection>
            <Wrapper>

                <Title>
                    Summary
                </Title>
                <p>
                    Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.
                    Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.
                    Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.

                </p>

            </Wrapper>
        </WrapperSection>
    )
}