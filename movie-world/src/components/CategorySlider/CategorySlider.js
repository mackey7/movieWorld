import React from 'react';
import Styled from 'styled-components'
import { CategorySliderFilmItem } from '../CategorySliderFilmItem/CategorySliderFilmItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderContainer = Styled.section`
    background:#3d2f87;
    padding:20px 0px;
`
const SliderWrapper = Styled.div`
    margin:0 auto;
    font-size:24px;
    font-weight:700;
    max-width:80%;
`

const CategoryName = Styled.span`
    text-transform:uppercase;  
     color:#e1e1e1;
    font-weight:100;
    letter-spacing:2px;
`
const Loader = Styled.div`
    margin:0 auto;
    color:#e1e1e1;
    letter-spacing:5px;
    font-weight:100;
`
const SeparateLine = Styled.div`
    margin:50px auto;
    width:70%;
    height:2px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.24693627450980393) 0%, rgba(136,136,136,1) 52%, rgba(255,255,255,0.19371498599439774) 100%);
`

class CategorySlider extends React.Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (

            <SliderContainer>
                <SliderWrapper>
                    <CategoryName> {this.props.CategoryTitle}</CategoryName>
                    <Slider {...settings}>
                        {this.props.data !== undefined && this.props.data.length > 0 ? (
                            this.props.data.map((item, key) => {
                                return (
                                    <div key={key} className="swiper-slide">
                                        <CategorySliderFilmItem
                                            src={item.poster_path}
                                            category={item.media_type}
                                            name={item.title}
                                            id={item.id}
                                        />
                                    </div>
                                );
                            })
                        ) : (
                                <Loader>Loading...</Loader>
                            )}
                    </Slider>
                </SliderWrapper>
                <SeparateLine> </SeparateLine>
            </SliderContainer >
        );
    }
}

export default CategorySlider;