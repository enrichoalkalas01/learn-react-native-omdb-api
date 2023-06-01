import { configureStore } from '@reduxjs/toolkit'

import Test from './reducers/Test'

export default configureStore({
    reducer: {
        Test
    }
})