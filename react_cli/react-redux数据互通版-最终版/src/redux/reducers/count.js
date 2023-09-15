import {INCREMENT,DECREMENT} from '../constant'

const init = 0
export default function countReducer (pre=init,action){
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return pre + data
        case DECREMENT:
                return pre - data
    
        default:
            return pre;
    }
}