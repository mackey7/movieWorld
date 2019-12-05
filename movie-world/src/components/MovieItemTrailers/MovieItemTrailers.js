import React from 'react'
import Styled from 'styled-components'

const WrapperSection = Styled.section`
background:#161130;
padding:20px 0px 50px 0px;
`
const Wrapper = Styled.div`
width:80%;
margin:0 auto;
color:#fff;
`

const Title = Styled.h2`
text-transform:uppercase;
letter-spacing: 4px;
`

const MovieSection = Styled.section`
display:flex;
justify-content:space-between;

iframe{
    border:0px;
}
`
export const MovieItemTrailers = () => {
    return (
        <WrapperSection>
            <Wrapper>
                <Title>
                    TRAILERS
                </Title>

                <MovieSection>

                    <iframe width="33%" height="250px" src="https://www.youtube.com/embed/F6QaLsw8EWY"></iframe>
                    <iframe width="33%" height="250px" src="https://www.youtube.com/embed/F6QaLsw8EWY"></iframe>
                    <iframe width="33%" height="250px" src="https://www.youtube.com/embed/F6QaLsw8EWY"></iframe>

                </MovieSection>
            </Wrapper>
        </WrapperSection >
    )
}
