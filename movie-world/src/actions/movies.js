import axios from 'axios'
import { FETCH_POPULAR_MOVIE_OF_DAY } from './actions_types/index'
import { API_KEY } from '../env/API_KEY'
const API = "https://api.themoviedb.org/3/trending/movie/day?api_key="

export const fetchPopularMovieOfDayApi = () => {
    return (dispatch) => {
        return axios.get(`${API}${API_KEY} `)
            .then(response => {
                dispatch(fetchPosts(response.data));
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