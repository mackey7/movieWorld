import React from 'react'
import { MovieItemHeader } from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
import { MovieItemCast } from '../../components/MovieItemCast/MovieItemCast'
export const MovieItem = () => {
    return (
        <div>
            <MovieItemHeader />
            <MovieItemSummary />
            <MovieItemCast />
        </div>
    )
}