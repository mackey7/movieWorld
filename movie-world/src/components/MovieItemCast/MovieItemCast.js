import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

const Title = Styled.h2`
text-transform:uppercase;
letter-spacing: 4px;`

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
font-size:40px;
cursor:pointer;
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
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1} >
                        <Icon className="fas fa-chevron-left"></Icon>
                    </ScrollAnimation>
                    <CaruselSection>
                        <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                            <MovieItem>
                                <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                                <span> Jack Black</span>
                            </MovieItem>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                            <MovieItem>
                                <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                                <span> Jack Black</span>
                            </MovieItem>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                            <MovieItem>
                                <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                                <span> Jack Black</span>
                            </MovieItem>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                            <MovieItem>
                                <Img src="https://image.tmdb.org/t/p/w185/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg" />
                                <span> Jack Black</span>
                            </MovieItem>
                        </ScrollAnimation>


                    </CaruselSection>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1} >
                        <Icon className="fas fa-chevron-right"></Icon>
                    </ScrollAnimation>
                </CaruselWrapper>
            </Wrapper>
        </WrapperSection>
    )
}