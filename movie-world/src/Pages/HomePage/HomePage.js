import React from 'react';
import { TopNav } from '../../components/TopNav/TopNav'
import { Footer } from '../../components/Footer/Footer'
import HomePageCategories from '../../containers/HomePageCategories/HomePageCategories'
import HeaderSliderContainer from '../../containers/HeaderSliderContainer/HeaderSliderContainer'

export const HomePage = () => {
    return (
        <div>
            <TopNav />
            {/* <HeaderSliderContainer indexOfSwiper={10} /> */}
            <HomePageCategories />
            <Footer />

        </div>
    )
}
