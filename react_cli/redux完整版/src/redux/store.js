// 该文件专门用于暴露一个store对象，整个应用只有一个store对象


import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))