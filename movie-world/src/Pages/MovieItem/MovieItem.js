import React from 'react'
import { MovieItemHeader } from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
export const MovieItem = () => {
    return (
        <div>
            <MovieItemHeader />
            <MovieItemSummary />
        </div>
    )
}