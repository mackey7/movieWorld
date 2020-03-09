import React from 'react';
import { fetchUpcomingMovies } from '../../actions/movies'
import { connect } from "react-redux";
import Styled from 'styled-components'
import { Slide } from '../../components/Header/Slide'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Loader = Styled.div`
    margin:0 auto;
    color:#e1e1e1;
    letter-spacing:5px;
    font-weight:100;
`

const Wrapper = Styled.header`
    margin:0;
    padding:0;
    width:100%;
    height:100%;
  

`
class HeaderSlidderContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUpcomingMovies();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            nextArrow: null,
            prevArrow: null,
            arrows: false
        };
        return (
            <Wrapper>
                <Slider {...settings}>

                    {this.props.upcoming_movies.results !== undefined && this.props.upcoming_movies.results.length > 0 ? (
                        this.props.upcoming_movies.results.slice(0, 3).map((item, key) => {
                            return (

                                <Slide key={key} img={item.backdrop_path} title={item.title} />

                            );
                        })
                    ) : (
                            <Loader>Loading...</Loader>
                        )}

                </Slider >
            </Wrapper>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
    }
}
const mapStateToProps = (state) => {
    return {
        upcoming_movies: state.movies.upcoming_movies,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSlidderContainer)