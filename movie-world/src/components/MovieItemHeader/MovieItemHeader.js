import React, { Component } from 'react'
import Styled from 'styled-components'
import { Animated } from "react-animated-css";

const Wrapper = Styled.header`
min-width:100%;
height:100vh;
background-image: url(${props => props.bgUrl});
background-repeat:none;
background-position:center;
background-size: 100% 100vh; 

`
const Icon = Styled.i`
margin-top:70px;
color:#fff;
font-size:60px;
cursor: pointer;
`

const HeaderContent = Styled.div`
width:80%;
margin:0 auto;
min-height:100vh;
display:flex;
justify-content:space-between;
flex-direction:column;
`

const HeaderContentBottom = Styled.div`
margin-bottom:10px;
display:flex;
justify-content:space-between;
align-items:flex-end;
`

const HeartIconWhite = Styled.i`
color:#fff;
font-size:60px;
cursor: pointer;
&:hover{
    color:#ca2e2e;
}
`
const HeartIconRed = Styled.i`
color:#ca2e2e;
font-size:60px;
cursor: pointer;
&:hover{
  color:#fff;
}
`
const MoviePoster = Styled.img`
width:140px;
`
const MovieDetailsContainer = Styled.div`
display:flex;
align-items:center;
`
const MovieDetails = Styled.div`
display:flex;
flex-direction:column;
margin-left:30px;
color:#fff;
`



class MovieItemHeader extends Component {
    state = {
        isClick: false
    }

    historyBack = () => {
        window.history.back();
    }

    handleAdd = () => {
        this.setState({
            isClick: !this.state.isClick,

        })
        if (this.state.isClick) {
            this.props.DeleteMovieFromFavourite(this.props.data.id)
        } else {
            const { id, poster_path, original_title } = this.props.data
            const FavouriteObject = { id, poster: poster_path, titile: original_title }

            this.props.AddMovieToFavourite(FavouriteObject);
        }
    }

    render() {




        return (
            <Wrapper bgUrl={`https://image.tmdb.org/t/p/original/${this.props.data.backdrop_path}`}>
                <HeaderContent>
                    <div>
                        <Animated animationIn="bounceInLeft" >
                            <Icon onClick={this.historyBack} className="fas fa-chevron-left"></Icon>
                        </Animated>
                    </div>
                    <HeaderContentBottom>
                        <MovieDetailsContainer>
                            <Animated animationIn="bounceInLeft" >
                                <MoviePoster src={`https://image.tmdb.org/t/p/w154/${this.props.data.poster_path}`} />
                            </Animated>
                            <Animated animationIn="bounceInRight" >
                                <MovieDetails>
                                    <h2> {this.props.data.original_title}</h2>
                                    <span> {this.props.data.vote_average}</span>
                                    <span>{this.props.data.status} | {this.props.data.original_language}</span>
                                </MovieDetails>
                            </Animated>

                        </MovieDetailsContainer>
                        <Animated animationIn="bounceInRight" >
                            {this.state.isClick ?
                                <HeartIconRed onClick={() => this.handleAdd()} className="fas fa-heart"></HeartIconRed>

                                : <HeartIconWhite onClick={() => this.handleAdd()} className="fas fa-heart"></HeartIconWhite>
                            }

                        </Animated>
                    </HeaderContentBottom>
                </HeaderContent>
            </Wrapper >
        )
    }
}

export default MovieItemHeader 