import React from 'react'
import CategorySlider from '../../components/CategorySlider/CategorySlider'
import { fetchUpcomingMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies } from '../../actions/movies'
import { connect } from "react-redux";

class HomePageCategories extends React.Component {
    componentDidMount() {
        this.props.fetchUpcomingMovies();
        this.props.fetchPopularMovies();
        this.props.fetchNowPlayingMovies();
        this.props.fetchTopRatedMovies();
    }

    render() {
        return (
            <div>
                <CategorySlider indexOfSwiper={0} CategoryTitle={"Upcoming"} data={this.props.popular_movies.results} />
                <CategorySlider indexOfSwiper={1} CategoryTitle={"Popular"} data={this.props.upcoming_movies.results} />
                <CategorySlider indexOfSwiper={2} CategoryTitle={"Now Playing"} data={this.props.now_playing_movies.results} />
                <CategorySlider indexOfSwiper={3} CategoryTitle={"Top Rated"} data={this.props.top_rated_movies.results} />
            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
        fetchPopularMovies: () => dispatch(fetchPopularMovies()),
        fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
        fetchTopRatedMovies: () => dispatch(fetchTopRatedMovies())
    }
}
const mapStateToProps = (state) => {
    console.log(state.movies)
    return {
        upcoming_movies: state.movies.upcoming_movies,
        popular_movies: state.movies.popular_movies,
        now_playing_movies: state.movies.now_playing_movies,
        top_rated_movies: state.movies.top_rated_movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageCategories)