import { FETCH_POPULAR_MOVIE_OF_DAY, FETCH_UPCOMING_MOVIE, FETCH_POPULAR_MOVIES } from '../actions/actions_types'

const initial = {
    films: [],
    upcoming_movie: [],
    popular_movies: []

}

const moviesReducer = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POPULAR_MOVIE_OF_DAY: {
            return { ...state, films: actions.payload }
        }
        case FETCH_UPCOMING_MOVIE: {
            return { ...state, upcoming_movie: actions.payload }
        }
        case FETCH_POPULAR_MOVIES: {
            return { ...state, popular_movies: actions.payload }
        }
        default:
            return state;
    }

}

export default moviesReducer