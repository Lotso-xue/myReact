import { INCREMENT,DECREMENT } from "./constant"

// 同步action：就是指action的返回值为object类型的一般对象
export const incrementAction = data => ({type:INCREMENT,data:data})
export const decrementAction = data => ({type:DECREMENT,data:data})
// 异步action：就是指action的返回值为函数,异步action中一般都会调用同步action
export const incrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(incrementAction(data))
          },time)
    }
}
