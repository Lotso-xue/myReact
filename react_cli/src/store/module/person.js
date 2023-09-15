import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name:'person',
    initialState:{
        persons:[
            {id:'001',name:'xue',age:21}
        ],
    },
    reducers:{
        // 这里还是得用扩展运算符的方式
        addPerson(preState,{payload}){
            preState.persons = [payload,...preState.persons]
        }
    }
})

// addPerson函数也作为personSlice里的actions
export const {addPerson} = personSlice.actions
export default personSlice.reducer