import React from "react"
import { TopNav } from '../../components/TopNav/TopNav'
import { Footer } from '../../components/Footer/Footer'
import { FavouritePageContentContainer } from '../../containers/FavouritePageContentContainer/FavouritePageContentContainer'
export const Favourite = () => {
    return (
        <div>
            <TopNav />
            <FavouritePageContentContainer />
            <Footer />
        </div>
    )
}