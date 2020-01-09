import React from 'react'
import { CategorySlider } from '../../components/CategorySlider/CategorySlider'
import { fetchUpcomingMovie, fetchPopularMovie } from '../../actions/movies'
import { connect } from "react-redux";

class HomePageCategories extends React.Component {
    MovieArray = [
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" },
        { 'poster_path': "https://image.tmdb.org/t/p/w154/r15SUgzjL8bablcdEkHk9T7TSRl.jpg", "media_type": "Animation | Adventure", "title": "Barbie: Dolphin Magic" }

    ]
    componentDidMount() {
        this.props.fetchUpcomingMovie();
        this.props.fetchPopularMovie()
    }

    render() {
        return (
            <div>
                <CategorySlider CategoryTitle={"Upcoming"} data={this.props.popular_movies.results} />
                <CategorySlider CategoryTitle={"Popular"} data={this.props.upcoming_movie.results} />
                <CategorySlider CategoryTitle={"Now Playing"} data={this.MovieArray} />
                <CategorySlider CategoryTitle={"Top Rated"} data={this.MovieArray} />
            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpcomingMovie: () => dispatch(fetchUpcomingMovie()),
        fetchPopularMovie: () => dispatch(fetchPopularMovie()),
    }
}
const mapStateToProps = (state) => {
    console.log(state.movies)
    return {
        upcoming_movie: state.movies.upcoming_movie,
        popular_movies: state.movies.popular_movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageCategories)