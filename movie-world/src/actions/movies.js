import axios from 'axios'
import { FETCH_POPULAR_MOVIE_OF_DAY, FETCH_UPCOMING_MOVIE } from './actions_types/index'
import { API_KEY } from '../env/API_KEY'
const API = "https://api.themoviedb.org/3/trending/movie/day?api_key="

export const fetchPopularMovieOfDayApi = () => {
    return (dispatch) => {
        return axios.get(`${API}${API_KEY} `)
            .then(response => {
                dispatch(fetchPopularMovieOfDay(response.data));
            })
            .catch(error => {
                throw error;
            })
    }
}

export const fetchPopularMovieOfDay = (payload) => {
    return {
        type: FETCH_POPULAR_MOVIE_OF_DAY,
        payload
    }
}

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