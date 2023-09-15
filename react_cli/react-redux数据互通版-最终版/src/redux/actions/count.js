import {INCREMENT,DECREMENT} from '../constant'

export const increment = data => ({type:INCREMENT,data:data})
export const decrement = data => ({type:DECREMENT,data:data})

export const incrementAsync = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}