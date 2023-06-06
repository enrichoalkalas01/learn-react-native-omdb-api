import { configureStore } from '@reduxjs/toolkit'

import Test from './reducers/Test'
import Movie from './reducers/Movie'

export default configureStore({
    reducer: {
        Movie,
        // Test
    }
})