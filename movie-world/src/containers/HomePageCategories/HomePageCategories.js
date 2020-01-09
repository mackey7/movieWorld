import React from 'react'
import { CategorySlider } from '../../components/CategorySlider/CategorySlider'
import { fetchUpcomingMovie, fetchPopularMovie, fetchNowPlayingMovies } from '../../actions/movies'
import { connect } from "react-redux";

class HomePageCategories extends React.Component {
    componentDidMount() {
        this.props.fetchUpcomingMovie();
        this.props.fetchPopularMovie();
        this.props.fetchNowPlayingMovies()
    }

    render() {
        return (
            <div>
                <CategorySlider CategoryTitle={"Upcoming"} data={this.props.popular_movies.results} />
                <CategorySlider CategoryTitle={"Popular"} data={this.props.upcoming_movie.results} />
                <CategorySlider CategoryTitle={"Now Playing"} data={this.props.now_playing_movies.results} />
                {/* <CategorySlider CategoryTitle={"Top Rated"} data={this.MovieArray} /> */}
            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpcomingMovie: () => dispatch(fetchUpcomingMovie()),
        fetchPopularMovie: () => dispatch(fetchPopularMovie()),
        fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
    }
}
const mapStateToProps = (state) => {
    console.log(state.movies)
    return {
        upcoming_movie: state.movies.upcoming_movie,
        popular_movies: state.movies.popular_movies,
        now_playing_movies: state.movies.now_playing_movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageCategories)