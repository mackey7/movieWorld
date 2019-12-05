import React from 'react'
import Styled from 'styled-components'

const Title = Styled.h2``
const WrapperSection = Styled.section`
color:#fff;
background:#161130;
padding:10px 0px 30px  0px;;
margin:0;
`
const Wrapper = Styled.div`
width:80%;
margin:0 auto;
`
const CaruselWrapper = Styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const CaruselSection = Styled.div`
display:flex;
`
const Icon = Styled.i`
color:#007aff;
`
const MovieItem = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0px 20px;
opacity:.5;
cursor:pointer;
span{
    padding-top:10px;
}

&:hover{
    opacity:1;
}
`
const Img = Styled.img`
width:100px;
border-radius:30px;
`

export const MovieItemCast = () => {
    return (
        <WrapperSection>
            <Wrapper>
                <Title>Cast</Title>
                <CaruselWrapper>
                    <Icon className="fas fa-chevron-left"></Icon>

                    <CaruselSection>
                        <MovieItem>
                            <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                            <span> Jack Black</span>
                        </MovieItem>
                        <MovieItem>
                            <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                            <span> Jack Black</span>
                        </MovieItem>
                        <MovieItem>
                            <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                            <span> Jack Black</span>
                        </MovieItem>
                    </CaruselSection>

                    <Icon className="fas fa-chevron-right"></Icon>
                </CaruselWrapper>
            </Wrapper>
        </WrapperSection>
    )
}