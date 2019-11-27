import React from 'react'
import Styled from 'styled-components'
import { Dot } from './Dot'


const Wrapper = Styled.section`
display:flex;
`


export const Dots = () => {
    const arr = [1, 2, 3]
    return (
        <Wrapper>
            {arr.map(x => <Dot />)}
        </Wrapper>
    )

}