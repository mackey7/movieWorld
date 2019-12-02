import React from 'react'
import { MovieItemHeader } from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
import { MovieItemCast } from '../../components/MovieItemCast/MovieItemCast'
import { MovieItemTrailers } from '../../components/MovieItemTrailers/MovieItemTrailers'
export const MovieItem = () => {
    return (
        <div>
            <MovieItemHeader />
            <MovieItemSummary />
            <MovieItemCast />
            <MovieItemTrailers />
        </div>
    )
}