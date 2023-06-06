import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movie_list: [],
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
        }
    },
})

// Action creators are generated for each case reducer function
export const { setMovieList, setMovieDetailId, setMovieDetailData } = Movie.actions

export default Movie.reducer