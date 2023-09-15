// 该文件用于汇总所有的Reducer为一个总Reducer

import {combineReducers} from 'redux'
import countReducer from './count'
import personReducer from './person'

// 汇总所有的reducer来整合成一个reducer
export default combineReducers({
    count:countReducer,
    persons:personReducer
})
