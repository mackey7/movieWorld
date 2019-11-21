import { FETCH_POPULAR_MOVIE_OF_DAY } from '../actions/actions_types'

const initial = {
    films: []
}

const moviesReducer = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_POPULAR_MOVIE_OF_DAY: {
            return { ...state, films: actions.payload }
        }
        default:
            return state;
    }

}

export default moviesReducer