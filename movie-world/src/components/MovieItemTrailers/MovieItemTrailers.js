import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

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
flex-wrap:wrap;

iframe{
    border:0px;
}
`
export const MovieItemTrailers = ({ data }) => {
    return (
        <WrapperSection>
            <Wrapper>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <Title>
                        TRAILERS
                </Title>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
                    <MovieSection>
                        {console.log(data)}
                        {
                            data ?
                                data.map(video =>
                                    <iframe key={video.id} title="1" width="33%" height="250px" src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                                )
                                : <div>LOADING</div>
                        }


                    </MovieSection>
                </ScrollAnimation>

            </Wrapper>
        </WrapperSection >
    )
}
