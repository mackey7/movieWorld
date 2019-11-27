import React from 'react'
import { CategorySlider } from '../../components/CategorySlider/CategorySlider'


export const HomePageCategories = () => {
    return (
        <div>
            <CategorySlider CategoryTitle={"Trending"} />
            <CategorySlider CategoryTitle={"Trending"} />
            <CategorySlider CategoryTitle={"Trending"} />
            <CategorySlider CategoryTitle={"Trending"} />
        </div>
    )
}