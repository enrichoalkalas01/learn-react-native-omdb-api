import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movie_list: [],
    series_list: [],
    episode_list: [],
    movie_detail_id: '',
    movie_detail_data: null,
}

export const Movie = createSlice({
    name: 'Movie',
    initialState,
    reducers: {
        setMovieList: (state, action) => {
            state.movie_list = action.payload
        },
        setMovieDetailId: (state, action) => {
            state.movie_detail_id = action.payload
        },
        setMovieDetailData: (state, action) => {
            state.movie_detail_data = action.payload
        },

        setSeriesList: (state, action) => {
            state.series_list = action.payload
        },

        setEpisodeList: (state, action) => {
            state.episode_list = action.payload
        },

        clearMovieDetailId: (state) => {
            state.movie_detail_id = ''
        },
        clearMovieDetailData: (state) => {
            state.movie_detail_data = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { setMovieList, setSeriesList, setEpisodeList, setMovieDetailId, setMovieDetailData, clearMovieDetailId, clearMovieDetailData } = Movie.actions

export default Movie.reducer