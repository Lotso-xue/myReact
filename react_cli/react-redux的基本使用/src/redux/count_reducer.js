import {INCREMENT,DECREMENT} from './constant'
const init = 0
export default function countReducer(preState=init,action) {
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
    
        default:
            return preState
    }
}
