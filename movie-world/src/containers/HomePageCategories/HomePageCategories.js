import React from 'react'
import { CategorySlider } from '../../components/CategorySlider/CategorySlider'
import { fetchPopularMovieOfDayApi } from '../../actions/movies'
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
        this.props.fetchPopularMovieOfDayApi()
    }

    render() {
        return (
            <div>
                <CategorySlider CategoryTitle={"Upcoming"} data={this.props.movies.films.results} />
                <CategorySlider CategoryTitle={"Popular"} data={this.MovieArray} />
                <CategorySlider CategoryTitle={"Now Playing"} data={this.MovieArray} />
                <CategorySlider CategoryTitle={"Top Rated"} data={this.MovieArray} />
            </div >
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPopularMovieOfDayApi: () => dispatch(fetchPopularMovieOfDayApi()),
    }
}
const mapStateToProps = (state) => {
    console.log(state.movies.films.results)
    return {
        movies: state.movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageCategories)