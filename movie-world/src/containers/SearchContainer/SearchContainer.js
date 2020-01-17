import React, { Component } from 'react'
import { fetchSerachingKeyword } from '../../actions/movies'
import { connect } from "react-redux";

class SearchContainer extends Component {
    componentDidMount() {
        this.props.fetchSerachingKeyword(this.props.UrlId);

    }
    render() {
        console.log(this.props.search_video)
        return (
            <div>search {this.props.UrlId}</div>


        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSerachingKeyword: (movie_id) => dispatch(fetchSerachingKeyword(movie_id)),
    }
}
const mapStateToProps = (state) => {
    return {
        search_video: state.movies.search_video.results


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
