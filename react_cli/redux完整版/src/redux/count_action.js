// 该文件专门为Count组件生成action对象

import {INCREMENT,DECREMENT} from './constant'
// 箭头函数里面如果要返回一个对象的话，外面要用一个括号包裹着
// 同步action：就是指action的返回值为object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action：就是指action的返回值为函数,异步action中一般都会调用同步action
export const incrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
          },time)
    }
}