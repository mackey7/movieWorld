import React, { Component } from 'react'
import { MovieItemHeader } from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
import { MovieItemCast } from '../../components/MovieItemCast/MovieItemCast'
import { MovieItemTrailers } from '../../components/MovieItemTrailers/MovieItemTrailers'
import { fetchMovieItem } from '../../actions/movies'
import { connect } from "react-redux";
class MovieItemContainer extends Component {
    componentDidMount() {
        this.props.fetchMovieItem(this.props.UrlId);

    }
    render() {
        { console.log(this.props.movie_item) }
        return (

            < div >
                <MovieItemHeader data={this.props.movie_item} />
                <MovieItemSummary />
                <MovieItemCast />
                <MovieItemTrailers />

            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieItem: (movie_id) => dispatch(fetchMovieItem(movie_id)),

    }
}
const mapStateToProps = (state) => {
    return {
        movie_item: state.movies.movie_item,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItemContainer)
