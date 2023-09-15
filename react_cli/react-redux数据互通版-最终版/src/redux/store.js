import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总后的reducer
import reducer from './reducers'




// applyMiddleware(thunk)作用是：action可以写函数形式变成异步action

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))