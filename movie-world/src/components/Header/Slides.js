import React from 'react'
import { Slide } from './Slide'
export const Slides = () => {
    const arr = [1]
    return (
        <div>
            {arr.map(x => <Slide />)}
        </div>
    )
}