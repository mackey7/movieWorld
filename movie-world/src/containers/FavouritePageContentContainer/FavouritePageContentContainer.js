import React, { Component } from 'react'
import { FavouritePageContent } from '../../components/FavouritePageContent/FavouritePageContent'
import { connect } from "react-redux";

class FavouritePageContentContainer extends Component {

    render() {
        return (

            <FavouritePageContent data={this.props.favourite_movies} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favourite_movies: state.movies.favourite_movies,
    }
}
export default connect(mapStateToProps)(FavouritePageContentContainer)
