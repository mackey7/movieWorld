import React from 'react'
import { CategorySlider } from '../../components/CategorySlider/CategorySlider'
import { fetchPopularMovieOfDayApi } from '../../actions/movies'
import { connect } from "react-redux";

class HomePageCategories extends React.Component {

    componentDidMount() {
        this.props.fetchPopularMovieOfDayApi()
    }

    render() {
        return (
            <div>
                <CategorySlider CategoryTitle={"Trending"} />
                <CategorySlider CategoryTitle={"Trending"} />
                <CategorySlider CategoryTitle={"Trending"} />
                <CategorySlider CategoryTitle={"Trending"} />
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
    console.log(state.movies.films)
    return {
        movies: state.movies
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageCategories)