import * as actions from '../actions/movies'
import * as types from '../actions/actions_types'
import mockAxios from 'axios';

describe('test actions', () => {
    it('should create an action fetchUpcomingMoviesSuccess', () => {
        const payload = {
            "results": [
                {
                    "popularity": 279.237,
                    "vote_count": 201,
                    "video": false,
                    "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
                    "id": 454626,
                    "adult": false,
                    "backdrop_path": "/tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
                    "original_language": "en",
                    "original_title": "Sonic the Hedgehog",
                    "genre_ids": [
                        28,
                        35,
                        878,
                        10751
                    ],
                    "title": "Sonic the Hedgehog",
                    "vote_average": 7.2,
                    "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
                    "release_date": "2020-02-12"
                }]
        }
        const expectedAction = {
            type: types.FETCH_UPCOMING_MOVIES,
            payload
        }
        expect(actions.fetchUpcomingMoviesSuccess(payload)).toEqual(expectedAction)
    })

    it('should call a fetchUpcomingMovies finction ', () => {

        const payload = {}
    }



    
    it('should create an action fetchPopularMoviesSuccess', () => {
        const payload = {
            "page": 1,
            "total_results": 10000,
            "total_pages": 500,
            "results": [
                {
                    "popularity": 373.585,
                    "vote_count": 2345,
                    "video": false,
                    "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                    "id": 419704,
                    "adult": false,
                    "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
                    "original_language": "en",
                    "original_title": "Ad Astra",
                    "genre_ids": [
                        12,
                        18,
                        9648,
                        878,
                        53
                    ],
                    "title": "Ad Astra",
                    "vote_average": 6,
                    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
                    "release_date": "2019-09-17"
                }]
        }
        const expectedAction = {
            type: types.FETCH_POPULAR_MOVIES,
            payload
        }
        expect(actions.fetchPopularMoviesSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action fetchNowPlayingMoviesSuccess', () => {
        const payload = {
            "results": [
                {
                    "popularity": 279.237,
                    "vote_count": 201,
                    "video": false,
                    "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
                    "id": 454626,
                    "adult": false,
                    "backdrop_path": "/tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
                    "original_language": "en",
                    "original_title": "Sonic the Hedgehog",
                    "genre_ids": [
                        28,
                        35,
                        878,
                        10751
                    ],
                    "title": "Sonic the Hedgehog",
                    "vote_average": 7.2,
                    "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
                    "release_date": "2020-02-12"
                }]
        }
        const expectedAction = {
            type: types.FETCH_NOW_PLAYING_MOVIES,
            payload
        }
        expect(actions.fetchNowPlayingMoviesSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action fetchTopRatedMoviesSuccess', () => {
        const payload = {
            "page": 1,
            "total_results": 6908,
            "total_pages": 346,
            "results": [
                {
                    "popularity": 17.227,
                    "vote_count": 2209,
                    "video": false,
                    "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
                    "id": 19404,
                    "adult": false,
                    "backdrop_path": "/pVGzV02qmHVoKx9ehBNy7m2u5fs.jpg",
                    "original_language": "hi",
                    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
                    "genre_ids": [
                        35,
                        18,
                        10749
                    ],
                    "title": "Dilwale Dulhania Le Jayenge",
                    "vote_average": 8.8,
                    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
                    "release_date": "1995-10-20"
                }]
        }
        const expectedAction = {
            type: types.FETCH_TOP_RATED_MOVIES,
            payload
        }
        expect(actions.fetchTopRatedMoviesSuccess(payload)).toEqual(expectedAction)
    })


    it('should create an action fetchMovieItemSuccess', () => {
        const payload = {
            "adult": false,
            "backdrop_path": "/pVGzV02qmHVoKx9ehBNy7m2u5fs.jpg",
            "belongs_to_collection": null,
            "budget": 13200000,
            "genres": [
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10749,
                    "name": "Romance"
                }
            ],
            "homepage": "",
            "id": 19404,
            "imdb_id": "tt0112870",
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 17.227,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "production_companies": [
                {
                    "id": 1569,
                    "logo_path": "/lvzN86o3jrP44DIvn4SMBLOl9PF.png",
                    "name": "Yash Raj Films",
                    "origin_country": "IN"
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "IN",
                    "name": "India"
                }
            ],
            "release_date": "1995-10-20",
            "revenue": 100000000,
            "runtime": 190,
            "spoken_languages": [
                {
                    "iso_639_1": "hi",
                    "name": "हिन्दी"
                }
            ],
            "status": "Released",
            "tagline": "Come Fall In love, All Over Again..",
            "title": "Dilwale Dulhania Le Jayenge",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 2209
        }
        const expectedAction = {
            type: types.FETCH_MOVIE_ITEM,
            payload
        }
        expect(actions.fetchMovieItemSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action fetchMovieCreditsSuccess', () => {
        const payload = {
            "id": 19404,
            "cast": [
                {
                    "cast_id": 1,
                    "character": "Raj Malhotra",
                    "credit_id": "52fe47d69251416c750a71a1",
                    "gender": 2,
                    "id": 35742,
                    "name": "Shah Rukh Khan",
                    "order": 0,
                    "profile_path": "/1w76N732BRbwQegkHnhwE4zgls0.jpg"
                },
                {
                    "cast_id": 2,
                    "character": "Simran Singh",
                    "credit_id": "52fe47d69251416c750a71a5",
                    "gender": 1,
                    "id": 55061,
                    "name": "Kajol",
                    "order": 1,
                    "profile_path": "/h4m0TkDuEMCUNaPrQxMRyFb2AQ7.jpg"
                }]
        }
        const expectedAction = {
            type: types.FETCH_MOVIE_CREDITS,
            payload
        }
        expect(actions.fetchMovieCreditsSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action fetchSerachingKeywordSuccess', () => {
        const payload = {
            "page": 1,
            "total_results": 114,
            "total_pages": 6,
            "results": [
                {
                    "popularity": 32.344,
                    "vote_count": 13580,
                    "video": false,
                    "poster_path": "/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
                    "id": 272,
                    "adult": false,
                    "backdrop_path": "/9myrRcegWGGp24mpVfkD4zhUfhi.jpg",
                    "original_language": "en",
                    "original_title": "Batman Begins",
                    "genre_ids": [
                        28,
                        80,
                        18
                    ],
                    "title": "Batman Begins",
                    "vote_average": 7.6,
                    "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
                    "release_date": "2005-06-10"
                }]
        }
        const expectedAction = {
            type: types.FETCH_SEARCHING_KEYWORD,
            payload
        }
        expect(actions.fetchSerachingKeywordSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action AddMovieToFavourite', () => {
        const favouriteObject = { id: 1925, poster: "wwww.exaplesite.com/batmna.jpg", titile: "Batman" }
        const expectedAction = {
            type: types.ADD_MOVIE_TO_FAVOURITE,
            payload: favouriteObject
        }
        expect(actions.AddMovieToFavourite(favouriteObject)).toEqual(expectedAction)
    })

    it('should create an action DeleteMovieFromFavourite', () => {
        const id = 1985
        const expectedAction = {
            type: types.DELETE_MOVIE_FROM_FAVOURITE,
            id
        }
        expect(actions.DeleteMovieFromFavourite(id)).toEqual(expectedAction)
    })





})

