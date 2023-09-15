
import { ADD_PERSON } from "../constant";

// 初始化人的列表
const init = [{id:'001',name:'tom',age:12}]
export default function personReducer(preState=init,action){
    const {type,data} = action
    switch (type) {
        // 若是添加一个人，就加进去（新的在旧的前面）
        case ADD_PERSON:
            return [data,...preState]
    
        default:
            return preState;
    }
}