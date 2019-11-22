import React from 'react';
import { TopNav } from '../../components/TopNav/TopNav'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { HomePageCategories } from '../HomePageCategories/HomePageCategories'
export const HomePage = () => {
    return (
        <div>
            <TopNav />
            <Header />
            <HomePageCategories />
            <Footer />

        </div>
    )
}
