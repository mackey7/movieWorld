import React, { Component } from 'react'
import MovieItemContainer from '../../containers/MovieItemContainer/MovieItemContainer'
import { render } from 'react-dom'


class MovieItem extends Component {

    render() {
        { console.log(this.props.match.params.id) }
        const UrlId = this.props.match.params.id

        return (
            <div>
                <MovieItemContainer urlId={UrlId} />
            </div>
        )
    }
}
export default MovieItem