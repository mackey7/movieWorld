import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
import '../../styles/carousel.scss'
import { fetchUpcomingMovies } from '../../actions/movies'
import { connect } from "react-redux";
import Styled from 'styled-components'
import { Slide } from '../../components/Header/Slide'
const Loader = Styled.div`
    margin:0 auto;
    color:#e1e1e1;
    letter-spacing:5px;
    font-weight:100;
`


class HeaderSlidderContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUpcomingMovies();
    }
    render() {
        (() => {
            const sliderEl = document.querySelector('.home-swiper-container');
            if (!sliderEl) {
                return;
            }
            const slider = new Swiper(sliderEl, {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                observer: true,

                autoplay: {
                    delay: 10000,
                },

                pagination: {
                    el: '.home-swiper-pagination',
                    type: 'progressbar',
                },
                navigation: {
                    nextEl: '.home-swiper-button-next',
                    prevEl: '.home-swiper-button-prev',
                }
            });
        })();
        return (
            <div className="carousel-container" >
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.props.upcoming_movies.results !== undefined && this.props.upcoming_movies.results.length > 0 ? (
                            this.props.upcoming_movies.results.slice(0, 3).map((item, key) => {
                                return (
                                    <div key={key} className="swiper-slide">
                                        <Slide img={item.backdrop_path} title={item.title} />
                                        {console.log(item.backdrop_path)}
                                    </div>
                                );
                            })
                        ) : (
                                <Loader>Loading...</Loader>
                            )}
                    </div>
                </div>
                <div
                    className={`swiper-button-prev${this.props.indexOfSwiper}`}
                ></div>
                <div
                    className={`swiper-button-next${this.props.indexOfSwiper}`}
                ></div>
            </div>

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