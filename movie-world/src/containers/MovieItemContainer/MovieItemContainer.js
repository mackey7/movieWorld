import React, { Component } from 'react'
import { MovieItemHeader } from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
import { MovieItemCast } from '../../components/MovieItemCast/MovieItemCast'
import { MovieItemTrailers } from '../../components/MovieItemTrailers/MovieItemTrailers'
import { fetchMovieItem, fetchMovieCredits } from '../../actions/movies'
import { connect } from "react-redux";
class MovieItemContainer extends Component {
    componentDidMount() {
        this.props.fetchMovieItem(this.props.UrlId);
        this.props.fetchMovieCredits(this.props.UrlId);

    }
    render() {
        { console.log(this.props.movie_credits.cast) }
        return (

            < div >
                <MovieItemHeader data={this.props.movie_item} />
                <MovieItemSummary summary={this.props.movie_item.overview} />
                <MovieItemCast data={this.props.movie_credits.cast} indexOfSwiper={6} />
                <MovieItemTrailers />

            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieItem: (movie_id) => dispatch(fetchMovieItem(movie_id)),
        fetchMovieCredits: (movie_id) => dispatch(fetchMovieCredits(movie_id)),


    }
}
const mapStateToProps = (state) => {
    return {
        movie_item: state.movies.movie_item,
        movie_credits: state.movies.movie_credits

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItemContainer)
