import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"count",
    // 初始值： 会自动把initialState的所有值赋给reducers中的preState
    initialState:{
        count:0
    },
    reducers:{
        // 这里的每一个函数相当于之前的每一个case语句,
        // 第一个参数是：初始值或者上一个state，
        // 第二个参数是：action对象，里面包含type和payload（传过来的数据），这里是把payload解构出来了
        // 在这里面直接修改preState的属性值就行了，不用自己手动return
        incremnet(preState,{payload}){
            preState.count = preState.count + payload
        },
        decrement(preState,{payload}){
            preState.count = preState.count - payload
        }
    }
})

export const {incremnet,decrement} = countSlice.actions
export default countSlice.reducer