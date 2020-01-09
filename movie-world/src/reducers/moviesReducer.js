import { FETCH_UPCOMING_MOVIE, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_TOP_RATED_MOVIES } from '../actions/actions_types'

const initial = {
    upcoming_movies: [],
    popular_movies: [],
    now_playing_movies: [],
    top_rated_movies: []

}

const moviesReducer = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_UPCOMING_MOVIE: {
            return { ...state, upcoming_movie: actions.payload }
        }
        case FETCH_POPULAR_MOVIES: {
            return { ...state, popular_movies: actions.payload }
        }
        case FETCH_NOW_PLAYING_MOVIES: {
            return { ...state, now_playing_movies: actions.payload }
        }
        case FETCH_TOP_RATED_MOVIES: {
            return { ...state, top_rated_movies: actions.payload }
        }
        default:
            return state;
    }

}

export default moviesReducer