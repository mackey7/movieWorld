import React from "react"
import { TopNav } from '../../components/TopNav/TopNav'
import { Footer } from '../../components/Footer/Footer'
import { FavouritePageContent } from '../../components/FavouritePageContent/FavouritePageContent'
export const Favourite = () => {
    return (
        <div>
            <TopNav />
            <FavouritePageContent />
            <Footer />
        </div>
    )
}