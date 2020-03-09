import moviesReducer from '../reducers/moviesReducer'
import * as types from '../actions/actions_types'


describe('todos reducer', () => {

    it('Should return initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual({
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
            },]


        }

        )
    })

    it('should return FETCH_UPCOMING_MOVIES ', () => {
        expect([], {
            type: types.FETCH_UPCOMING_MOVIES,
            payload

        }).toEqual([])
    })

})