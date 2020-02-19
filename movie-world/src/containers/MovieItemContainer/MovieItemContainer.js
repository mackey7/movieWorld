import React, { Component } from 'react'
import MovieItemHeader from '../../components/MovieItemHeader/MovieItemHeader'
import { MovieItemSummary } from '../../components/MovieItemSummary/MovieItemSummary'
import { MovieItemCast } from '../../components/MovieItemCast/MovieItemCast'
import { MovieItemTrailers } from '../../components/MovieItemTrailers/MovieItemTrailers'
import { fetchMovieItem, fetchMovieCredits, fetchVideosAddedToMovie, AddMovieToFavourite, DeleteMovieFromFavourite } from '../../actions/movies'
import { connect } from "react-redux";
class MovieItemContainer extends Component {
    componentDidMount() {
        this.props.fetchMovieItem(this.props.UrlId);
        this.props.fetchMovieCredits(this.props.UrlId);
        this.props.fetchVideosAddedToMovie(this.props.UrlId);
    }
    render() {

        return (

            < div >
                <MovieItemHeader data={this.props.movie_item} AddMovieToFavourite={this.props.AddMovieToFavourite} DeleteMovieFromFavourite={this.props.DeleteMovieFromFavourite} />
                <MovieItemSummary summary={this.props.movie_item.overview} />
                <MovieItemCast data={this.props.movie_credits.cast} />
                <MovieItemTrailers data={this.props.videos_added_to_movie.results} />

            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieItem: (movie_id) => dispatch(fetchMovieItem(movie_id)),
        fetchMovieCredits: (movie_id) => dispatch(fetchMovieCredits(movie_id)),
        fetchVideosAddedToMovie: (movie_id) => dispatch(fetchVideosAddedToMovie(movie_id)),
        AddMovieToFavourite: (favouriteObject) => dispatch(AddMovieToFavourite(favouriteObject)),
        DeleteMovieFromFavourite: (id) => dispatch(DeleteMovieFromFavourite(id))

    }
}
const mapStateToProps = (state) => {
    return {
        movie_item: state.movies.movie_item,
        movie_credits: state.movies.movie_credits,
        videos_added_to_movie: state.movies.videos_added_to_movie

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItemContainer)
