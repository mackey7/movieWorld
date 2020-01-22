import { DELETE_MOVIE_FROM_FAVOURITE, ADD_MOVIE_TO_FAVOURITE, FETCH_UPCOMING_MOVIES, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_MOVIE_ITEM, FETCH_MOVIE_CREDITS, FETCH_VIDEOS_ADDED_TO_MOVIE, FETCH_SEARCHING_KEYWORD } from '../actions/actions_types'

const initial = {
    upcoming_movies: [],
    popular_movies: [],
    now_playing_movies: [],
    top_rated_movies: [],
    movie_item: [],
    movie_credits: [],
    videos_added_to_movie: [],
    search_video: [],
    favourite_movies: [{
        id: 496243,
        poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        titile: "기생충"
    }]


}

const moviesReducer = (state = initial, actions) => {
    switch (actions.type) {
        case FETCH_UPCOMING_MOVIES: {
            return { ...state, upcoming_movies: actions.payload }
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
        case FETCH_MOVIE_ITEM: {
            return { ...state, movie_item: actions.payload }
        }
        case FETCH_MOVIE_CREDITS: {
            return { ...state, movie_credits: actions.payload }
        }
        case FETCH_VIDEOS_ADDED_TO_MOVIE: {
            return { ...state, videos_added_to_movie: actions.payload }
        }
        case FETCH_SEARCHING_KEYWORD: {
            return { ...state, search_video: actions.payload }
        }
        case ADD_MOVIE_TO_FAVOURITE: {
            return { ...state, favourite_movies: [actions.id, actions.poster, actions.titile] }
        }
        case DELETE_MOVIE_FROM_FAVOURITE: {
            const sorted = state.favourite_movies.filter(item => item.id !== actions.id)
            return { ...state, favourite_movies: sorted }
        }
        default:
            return state;
    }

}


export default moviesReducer