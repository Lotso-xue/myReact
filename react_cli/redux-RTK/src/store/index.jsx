import {configureStore} from '@reduxjs/toolkit'

import countReducer from './module/count'
import personReducer from './module/person'

const store = configureStore({
    reducer:{
        countReducer:countReducer,
        personReducer:personReducer
    }
})

export default store