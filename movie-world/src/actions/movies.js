import axios from 'axios'
import { FETCH_UPCOMING_MOVIE, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_TOP_RATED_MOVIES, } from './actions_types/index'
import { API_KEY } from '../env/API_KEY'




export const fetchUpcomingMovie = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchUpcomingMovieSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchUpcomingMovieSuccess = (payload) => {
    return {
        type: FETCH_UPCOMING_MOVIE,
        payload
    }
}
export const fetchPopularMovie = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchPopularMovieSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchPopularMovieSuccess = (payload) => {
    return {
        type: FETCH_POPULAR_MOVIES,
        payload
    }
}
export const fetchNowPlayingMovies = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchNowPlayingMovieSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchNowPlayingMoviesSuccess = (payload) => {
    return {
        type: FETCH_NOW_PLAYING_MOVIES,
        payload
    }
}


export const fetchTopRatedMovies = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchTopRatedMoviesSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchTopRatedMoviesSuccess = (payload) => {
    return {
        type: FETCH_TOP_RATED_MOVIES,
        payload
    }
}