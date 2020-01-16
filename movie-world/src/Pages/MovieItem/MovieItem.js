import React, { Component } from 'react'
import MovieItemContainer from '../../containers/MovieItemContainer/MovieItemContainer'



class MovieItem extends Component {
    render() {
        const UrlId = this.props.match.params.id
        return (
            <div>
                <MovieItemContainer urlId={UrlId} />
            </div>
        )
    }
}
export default MovieItem