import axios from 'axios'
import { FETCH_UPCOMING_MOVIES, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_MOVIE_ITEM } from './actions_types/index'
import { API_KEY } from '../env/API_KEY'




export const fetchUpcomingMovies = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchUpcomingMoviesSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchUpcomingMoviesSuccess = (payload) => {
    return {
        type: FETCH_UPCOMING_MOVIES,
        payload
    }
}
export const fetchPopularMovies = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchPopularMoviesSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchPopularMoviesSuccess = (payload) => {
    return {
        type: FETCH_POPULAR_MOVIES,
        payload
    }
}
export const fetchNowPlayingMovies = () => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1 `)
            .then(response => {
                dispatch(fetchNowPlayingMoviesSuccess(response.data));
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

export const fetchMovieItem = (movie_id) => {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(fetchMovieItemSuccess(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchMovieItemSuccess = (payload) => {
    return {
        type: FETCH_MOVIE_ITEM,
        payload
    }
}

